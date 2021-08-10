import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
                {userData?.name ? (
                    <>
                        <Typography>{`${userData?.name} ${userData?.surname}`}</Typography>
                        <Typography>{userData?.email}</Typography>
                    </>
                ) : null}
            </div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle style={{ fontSize: 40, padding: 0 }} />
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
