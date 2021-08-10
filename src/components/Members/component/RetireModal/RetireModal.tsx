import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from 'store/user-slice';

interface RetireModalProps {
    id: number;
}

export const RetireModal: React.FC<RetireModalProps> = ({ id }) => {
    const dispatch = useDispatch();
    return (
        <>
            <DialogTitle id="alert-dialog-title">Retire User</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to retire this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => console.log('cancel')} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => dispatch(deleteUserAsync(id))} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </>
    );
};
