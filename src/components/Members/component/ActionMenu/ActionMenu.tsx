import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { RetireModalBody } from '../RetireModalBody';
import { EditModalForm } from '../EditModal';
import { useStyles } from './styles';
import { useModal } from 'components/ModalComponent/useModal';

interface ActionMenuProps {
    id: number;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ id }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { Modal: EditModal, toggleModal: toggleEditModal } = useModal({
        title: 'Edit Modal',
        body: <EditModalForm id={id} />,
    });
    const { Modal: RetireModal, toggleModal: toggleRetireModal } = useModal({
        title: 'Edit Modal',
        body: <RetireModalBody id={id} />,
    });

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
                <MenuItem onClick={toggleEditModal}>Edit</MenuItem>
                <MenuItem onClick={toggleRetireModal}>Retire</MenuItem>
                <EditModal />
                <RetireModal />
            </Menu>
        </>
    );
};
