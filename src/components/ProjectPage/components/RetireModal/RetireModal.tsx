import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { useStyles } from './styles';
import { useMutation } from '@apollo/client';
import { removeProjectQuery } from 'components/ProjectPage/api';
import { successfulToastNotify } from 'toasts';

interface RetireModalProps {
    projectId: number;
    handleCloseModal: () => void;
}

export const RetireModal: React.FC<RetireModalProps> = ({ projectId, handleCloseModal }) => {
    const classes = useStyles();
    const history = useHistory();
    const [removeProject] = useMutation(removeProjectQuery);

    const handleClick = async () => {
        await removeProject({ variables: { id: projectId } });
        successfulToastNotify('The project was deleted');
        history.push(ROUTE_PATH.projects);
    };

    return (
        <>
            <DialogTitle id="alert-dialog-title" color="primary">
                <Typography variant="h4"> Remove Project</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" color="primary">
                    <Typography variant="h3" className={classes.bodyText}>
                        Are you sure you want to delete this project? This action cannot be undone
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
                <Button onClick={handleCloseModal} color="secondary" variant="contained">
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleClick} color="primary" autoFocus>
                    Remove
                </Button>
            </DialogActions>
        </>
    );
};
