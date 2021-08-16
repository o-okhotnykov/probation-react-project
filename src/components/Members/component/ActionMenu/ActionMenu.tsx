import { IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ModalComponent } from 'components/ModalComponent';
import { RetireModal } from '../RetireModal';
import { useStyles } from './styles';

interface ActionMenuProps {
    id: number;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ id }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!isOpen);
    };
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
                <MenuItem onClick={toggleModal}>Retire</MenuItem>

                <ModalComponent open={isOpen} close={toggleModal}>
                    <RetireModal id={id} handleCloseModal={toggleModal} />
                </ModalComponent>
            </Menu>
        </>
    );
};
