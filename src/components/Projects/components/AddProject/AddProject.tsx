import React, { useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector } from 'react-redux';
import { isAdminSelector, isContributorSelector } from 'store/user-slice';
import { ModalComponent } from 'components/ModalComponent';
import { addProjectAsync } from 'store/project-slice';
import { useStyles } from './styles';
import { AddModal } from '../AddModal';

export const AddProject: React.FC = () => {
    const classes = useStyles();
    const isAdmin = useSelector(isAdminSelector);
    const isContributor = useSelector(isContributorSelector);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {(isAdmin || isContributor) && (
                <Box className={classes.addProject}>
                    <Typography variant="h1">Add Project</Typography>
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

            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <AddModal
                        header="Add new project"
                        handleCloseModal={toggleModal}
                        submit={addProjectAsync}
                    />
                </ModalComponent>
            )}
        </>
    );
};
