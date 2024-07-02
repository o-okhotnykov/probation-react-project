import { Box, Button, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector } from 'react-redux';
import { isAdminSelector } from 'store/user-slice';
import { AddModalForm } from '../AddModal';
import { useModal } from 'components/ModalComponent/useModal';

export const MembersHeader: React.FC = () => {
    const isAdmin = useSelector(isAdminSelector);

    const { Modal, toggleModal } = useModal({
        title: 'Create user',
        body: <AddModalForm />,
    });

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="h1">Members</Typography>
            <Typography variant="subtitle1">
                List of members where you can get list of members
            </Typography>
            {isAdmin && (
                <Button
                    color="primary"
                    onClick={toggleModal}
                    style={{ margin: '25px 0', padding: 0 }}
                >
                    <AddCircleIcon />
                    ADD NEW USER
                </Button>
            )}
            <Modal />
        </Box>
    );
};
