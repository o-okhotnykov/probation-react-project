import { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import { IUserData } from 'types/api/auth';
import { ChangePasswordForm } from '../ChangePasswordModal';
import { EditModalForm } from '../EditModal';
import { useStyles } from './styles';
import { useModal } from 'components/ModalComponent/useModal';

export const ActionMenu: React.FC<{ user: IUserData }> = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const editModal = useModal({
        title: 'Change Password',
        body: <EditModalForm user={user} />,
    });

    const changePasswordModal = useModal({
        title: 'Change Password',
        body: <ChangePasswordForm />,
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
        <Box alignSelf="center" paddingTop="17%">
            <Button onClick={handleMenu} color="primary" variant="outlined">
                Actions
            </Button>
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
                <MenuItem onClick={editModal.toggleModal}>Edit User</MenuItem>
                <MenuItem onClick={changePasswordModal.toggleModal}>Change Password</MenuItem>
                <changePasswordModal.Modal />
                <editModal.Modal />
            </Menu>
        </Box>
    );
};
