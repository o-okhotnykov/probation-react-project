import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector } from 'react-redux';
import { isAdminSelector, isContributorSelector } from 'store/user-slice';
import { useStyles } from './styles';
import { AddProjectForm } from '../AddModal';
import { useModal } from 'components/ModalComponent/useModal';

export const AddProject: React.FC = () => {
    const classes = useStyles();
    const isAdmin = useSelector(isAdminSelector);
    const isContributor = useSelector(isContributorSelector);

    const { Modal, toggleModal } = useModal({
        title: 'Add Modal',
        body: <AddProjectForm />,
    });

    return (
        <>
            {(isAdmin || isContributor) && (
                <Box className={classes.addProject}>
                    <Typography variant="h2">Add Project</Typography>
                    <Typography variant="subtitle1">
                        Create a new project on ProManage. Collaborate your work. Directory to your
                        local projects
                    </Typography>

                    <Button color="primary" className={classes.btn} onClick={toggleModal}>
                        <AddCircleIcon className={classes.icon} />
                        CREATE New Project
                    </Button>
                </Box>
            )}

            <Modal />
        </>
    );
};
