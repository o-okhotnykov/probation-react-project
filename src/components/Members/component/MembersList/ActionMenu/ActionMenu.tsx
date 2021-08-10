import { IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { DialogComponent } from 'components/DialogComponent';
import { useStyles } from './styles';
import { RetireModal } from '../../RetireModal';

interface ActionMenuProps {
    id: number;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ id }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [modalState, setModalState] = useState(false);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu
                className={classes.menu}
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
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem
                    onClick={() => {
                        setModalState(true);
                        handleClose();
                    }}
                >
                    Retire
                </MenuItem>
            </Menu>
            <DialogComponent isOpen={modalState} onClose={() => setModalState(false)}>
                <RetireModal id={id} />
            </DialogComponent>
        </>
    );
};
