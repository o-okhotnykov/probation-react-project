import React from 'react';
import { Box, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp } from 'types/api/auth';
import { Form } from './Form';
import { useStyles } from './styles';

interface AddModalProps {
    submit: AsyncThunkProp;
    header: string;
}

export const AddModal: React.FC<AddModalProps> = ({ header, submit }) => {
    const classes = useStyles();

    return (
        <Box minWidth={550} minHeight={400}>
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form submit={submit} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </Box>
    );
};
