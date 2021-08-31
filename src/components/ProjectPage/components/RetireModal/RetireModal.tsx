import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteProjectAsync } from 'store/project-slice';
import { ROUTE_PATH } from 'constants/index';
import { useStyles } from './styles';

interface RetireModalProps {
    projectId: number;
    handleCloseModal: () => void;
}

export const RetireModal: React.FC<RetireModalProps> = ({ projectId, handleCloseModal }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        dispatch(deleteProjectAsync(projectId));
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
