import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClearIcon from '@material-ui/icons/Clear';
import { Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { logout, getUserAsync, userDataSelector } from 'store/user-slice';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { useStyles } from './style';

export const UserMenu: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const userData = useSelector(userDataSelector);
    const loading = useSelector(isRequestPendingSelector(getUserAsync.typePrefix));

    useEffect(() => {
        dispatch(getUserAsync());
    }, [dispatch]);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="user-menu">
            <div className="user-data">
                {userData && (
                    <>
                        <Typography variant="h5">{`${userData?.name} ${userData?.surname}`}</Typography>
                        <Typography variant="caption">{userData?.email}</Typography>
                    </>
                )}
            </div>
            <IconButton
                className={classes.menu}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <img className={classes.userLogo} src={userData?.img} alt="user-avatar" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} className={classes.menu}>
                    <Button startIcon={<PersonOutlineIcon />} className={classes.btn}>
                        Edit Profile
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menu}>
                    <Button
                        onClick={handleLogout}
                        startIcon={<ClearIcon />}
                        className={classes.btn}
                    >
                        Logout
                    </Button>
                </MenuItem>
            </Menu>
        </div>
    );
};
