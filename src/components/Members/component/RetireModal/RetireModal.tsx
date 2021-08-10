import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';

export const RetireModal = () => {
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
                <Button onClick={() => console.log('confirm')} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </>
    );
};
