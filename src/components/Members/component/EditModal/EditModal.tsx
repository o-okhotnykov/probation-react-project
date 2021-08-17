import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { EditForm } from './EditForm';
import { useStyles } from './styles';

interface EditModalProps {
    id: number;
    handleCloseModal: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({ id }) => {
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
            <DialogContent>
                <EditForm id={id} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </>
    );
};
