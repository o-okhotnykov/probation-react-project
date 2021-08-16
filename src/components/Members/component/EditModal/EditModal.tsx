import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { useStyles } from './styles';

interface EditModalProps {
    id: number;
    handleCloseModal: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({ id, handleCloseModal }) => {
    // const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
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
