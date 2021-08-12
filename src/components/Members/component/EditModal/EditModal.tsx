/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IEditForm, UserStatus } from 'types/api/auth';
import { currentUserSelector, getUserAsync, getUserByIdAsync } from 'store/user-slice';
import { EditForm } from './EditForm';
import { useStyles } from './styles';

interface EditModalProps {
    id: number;
    handleCloseModal: any;
}

export const EditModal: React.FC<EditModalProps> = ({ id, handleCloseModal }) => {
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
