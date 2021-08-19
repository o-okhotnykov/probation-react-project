import { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ModalComponent } from 'components/ModalComponent';
import { registerAsync } from 'store/user-slice';
import { AddModal } from '../AddModal';

export const MembersHeader: React.FC = () => {
    const [isOpen, seIsOpen] = useState(false);

    const toggleModal = () => {
        seIsOpen(!isOpen);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="h2">Members</Typography>
            <Typography variant="subtitle1">
                List of members where you can get list of members
            </Typography>

            <Button color="primary" onClick={toggleModal} style={{ margin: '25px 0', padding: 0 }}>
                <AddCircleIcon style={{ fontSize: 40 }} />
                ADD NEW USER
            </Button>

            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <AddModal
                        header="Create user"
                        handleCloseModal={toggleModal}
                        submit={registerAsync}
                    />
                </ModalComponent>
            )}
        </Box>
    );
};
