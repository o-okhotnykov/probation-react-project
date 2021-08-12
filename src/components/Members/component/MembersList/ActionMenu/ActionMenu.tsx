/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, Menu, MenuItem, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ModalComponent } from 'components/ModalComponent';
import { RetireModal } from '../../RetireModal';
import { useStyles } from './styles';
import { EditModal } from '../../EditModal';

interface ActionMenuProps {
    id: number;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ id }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isOpenEdit, setIsSOpenEdit] = useState(false);
    const [isOpenRetire, setIsSOpenRetire] = useState(false);

    const toggleModalEdit = () => {
        setIsSOpenEdit(!isOpenEdit);
    };

    const toggleModalRetire = () => {
        setIsSOpenRetire(!isOpenRetire);
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
                <MenuItem onClick={toggleModalEdit}>Edit</MenuItem>
                <MenuItem onClick={toggleModalRetire}>Retire</MenuItem>

                {isOpenEdit && (
                    <ModalComponent open={isOpenEdit} close={toggleModalEdit}>
                        <EditModal id={id} handleCloseModal={toggleModalEdit} />
                    </ModalComponent>
                )}
                {isOpenRetire && (
                    <ModalComponent open={isOpenRetire} close={toggleModalRetire}>
                        <RetireModal id={id} handleCloseModal={toggleModalRetire} />
                    </ModalComponent>
                )}
            </Menu>
        </>
    );
};
