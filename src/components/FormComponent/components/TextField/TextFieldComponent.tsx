/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextField } from '@mui/material';
import { useFormatDate } from 'context/FormatDateProvider';
import React from 'react';
import { useStyles } from './style';

interface TextFieldComponentProps {
    id: string;
    label: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent) => void;
    onBlur: (e: React.ChangeEvent) => void;
    touched: boolean | undefined;
    errors: string | undefined;
}

export const TextFieldComponent: React.FC<TextFieldComponentProps> = (props) => {
    const { id, label, type, value, onChange, onBlur, touched, errors } = props;
    const classes = useStyles();

    return (
        <TextField
            id={id}
            label={label}
            value={value}
            type={type}
            className={classes.text}
            onChange={onChange}
            onBlur={onBlur}
            helperText={touched ? errors : ''}
            error={Boolean(errors)}
            margin="dense"
            placeholder={label}
            variant="outlined"
            fullWidth
        />
    );
};
