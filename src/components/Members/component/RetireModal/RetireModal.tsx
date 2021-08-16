import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync, getUsersAsync } from 'store/user-slice';
import { useStyles } from './styles';

interface RetireModalProps {
    id: number;
    handleCloseModal: any;
}

export const RetireModal: React.FC<RetireModalProps> = ({ id, handleCloseModal }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="alert-dialog-title">Retire User</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to retire this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
                <Button
                    className={`${classes.btn} ${classes.btnCancel}`}
                    onClick={handleCloseModal}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    className={`${classes.btn} ${classes.btnConfirm}`}
                    onClick={() => {
                        dispatch(deleteUserAsync(id));
                        dispatch(getUsersAsync());
                        handleCloseModal();
                    }}
                    color="primary"
                    autoFocus
                >
                    Confirm
                </Button>
            </DialogActions>
        </>
    );
};
