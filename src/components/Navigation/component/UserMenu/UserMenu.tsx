import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClearIcon from '@material-ui/icons/Clear';
import { Typography, Button, IconButton, Menu, MenuItem, Box } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { logout, getUserAsync, userDataSelector } from 'store/user-slice';
import { Loading } from 'components/Loading';
import { ROUTE_PATH } from 'constants/index';
import { useStyles } from './style';

export const UserMenu: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const userData = useSelector(userDataSelector);
    const history = useHistory();
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

    const handleRedirect = () => {
        history.push(ROUTE_PATH.settings);
    };
    return (
        <Box display="flex" alignItems="center">
            <Loading apiCall={getUserAsync}>
                <Box display="flex" flexDirection="column" textAlign="right">
                    {userData && (
                        <>
                            <Typography variant="h5">{`${userData?.name} ${userData?.surname}`}</Typography>
                            <Typography variant="caption">{userData?.email}</Typography>
                        </>
                    )}
                </Box>
                <IconButton
                    className={classes.root}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    {userData === null ? (
                        <AccountCircle style={{ fontSize: 40, padding: 0 }} />
                    ) : (
                        <img className={classes.userLogo} src={userData?.img} alt="user-avatar" />
                    )}
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
                        <Button
                            onClick={handleRedirect}
                            startIcon={<PersonOutlineIcon />}
                            className={classes.btn}
                        >
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
            </Loading>
        </Box>
    );
};
