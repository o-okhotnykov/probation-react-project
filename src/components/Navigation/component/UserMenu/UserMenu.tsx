import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

export const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                <MenuItem onClick={handleClose}>
                    <Button startIcon={<PersonOutlineIcon />}>Edit Profile</Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button startIcon={<ClearIcon />}>Logout</Button>
                </MenuItem>
            </Menu>
        </div>
    );
};
