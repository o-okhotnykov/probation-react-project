import React from 'react';
import { Box, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp } from 'types/api/auth';
import { Form } from './Form';
import { useStyles } from './styles';

interface EditModalProps {
    submit: AsyncThunkProp;
    handleClose: () => void;
    header: string;
}

export const ChangePasswordModal: React.FC<EditModalProps> = ({ header, submit, handleClose }) => {
    const classes = useStyles();

    return (
        <Box minWidth="600px" minHeight="312px">
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form submit={submit} handleClose={handleClose} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </Box>
    );
};
