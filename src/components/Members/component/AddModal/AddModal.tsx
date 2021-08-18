import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Form } from './Form';
import { useStyles } from './styles';

interface AddModalProps {
    handleCloseModal: () => void;
    submit: any;
    header: string;
}

export const AddModal: React.FC<AddModalProps> = ({ header, submit }) => {
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form submit={submit} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </>
    );
};
