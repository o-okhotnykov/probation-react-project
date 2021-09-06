import React from 'react';
import { Box, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp, IUserData } from 'types/api/auth';
import { Form } from './Form';
import { useStyles } from './styles';

interface EditModalProps {
    user: IUserData;
    submit: AsyncThunkProp;
    header: string;
}

export const EditModal: React.FC<EditModalProps> = ({ user, header, submit }) => {
    const classes = useStyles();

    return (
        <Box minWidth="600px" minHeight="312px">
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form user={user} submit={submit} />
            </DialogContent>
            <DialogActions className={classes.action} />
        </Box>
    );
};
