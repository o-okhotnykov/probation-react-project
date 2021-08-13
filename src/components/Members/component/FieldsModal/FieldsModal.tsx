import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Form } from './Form';
import { useStyles } from './styles';

interface FieldsModalProps {
    id: number | null;
    handleCloseModal: any;
    submit: any;
    header: string;
}

export const FieldsModal: React.FC<FieldsModalProps> = ({ id, header, submit }) => {
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form id={id} submit={submit} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </>
    );
};
