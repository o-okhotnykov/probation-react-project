import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp } from 'types/api/auth';
import { Form } from './Form';
import { useStyles } from './styles';

interface EditModalProps {
    id: number;
    submit: AsyncThunkProp;
    header: string;
}

export const EditModal: React.FC<EditModalProps> = ({ id, header, submit }) => {
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
