import React from 'react';
import { Box, DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp } from 'types/api/auth';
import { Form } from './Form';

interface AddModalProps {
    handleCloseModal: () => void;
    submit: AsyncThunkProp;
    header: string;
}

export const AddModal: React.FC<AddModalProps> = ({ header, submit, handleCloseModal }) => {
    return (
        <Box minWidth="600px" minHeight="300px">
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form submit={submit} handleCloseModal={handleCloseModal} />
            </DialogContent>
        </Box>
    );
};
