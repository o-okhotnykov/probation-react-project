import React from 'react';
import { DialogContent, DialogTitle } from '@material-ui/core';
import { AsyncThunkProp } from 'types/api/auth';
import { Form } from './Form';

interface AddModalProps {
    handleCloseModal: () => void;
    submit: AsyncThunkProp;
    header: string;
}

export const AddModal: React.FC<AddModalProps> = ({ header, submit, handleCloseModal }) => {
    return (
        <>
            <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
            <DialogContent>
                <Form submit={submit} handleCloseModal={handleCloseModal} />
            </DialogContent>
        </>
    );
};
