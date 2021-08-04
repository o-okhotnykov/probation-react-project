import React, { useEffect } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClearIcon from '@material-ui/icons/Clear';
import { Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getUserAsync, logout } from 'store/user-slice';
import { useStyles } from './style';

export const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(getUserAsync());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="user-menu">
            <div className="user-data">
                <Typography>Name Name</Typography>
                <Typography>Position</Typography>
            </div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
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
