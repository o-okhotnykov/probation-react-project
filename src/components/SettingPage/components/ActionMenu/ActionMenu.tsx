import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import { ModalComponent } from 'components/ModalComponent';
import { useState } from 'react';
import { changePasswordAsync, patchUserAsync } from 'store/user-slice';
import { IUserData } from 'types/api/auth';
import { ChangePasswordModal } from '../ChangePasswordModal';
import { EditModal } from '../EditModal';
import { useStyles } from './styles';

export const ActionMenu: React.FC<{ user: IUserData }> = ({ user }) => {
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
                <MenuItem onClick={toggleModalEdit}>Edit User</MenuItem>
                <MenuItem onClick={toggleModalRetire}>Change Password</MenuItem>

                {isOpenEdit && (
                    <ModalComponent open={isOpenEdit} close={toggleModalEdit}>
                        <EditModal user={user} header="Edit User" submit={patchUserAsync} />
                    </ModalComponent>
                )}
                {isOpenRetire && (
                    <ModalComponent open={isOpenRetire} close={toggleModalRetire}>
                        <ChangePasswordModal
                            header="Change password"
                            submit={changePasswordAsync}
                        />
                    </ModalComponent>
                )}
            </Menu>
        </Box>
    );
};
