/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { useFormatDate } from 'context/FormatDateProvider';
import React from 'react';
import { useStyles } from './styles';
interface DatePickerProps {
    onBlur: (e: React.ChangeEvent) => void;
    setFieldValue: (field: string, value: unknown) => void;
    value: string;
    name: string;
    id: string;
    errors?: string;
    touched?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
    const { setFieldValue, onBlur, errors, touched, value, id, name } = props;
    const { local } = useFormatDate();
    const classes = useStyles();

    const handleChangeDate = (date: string | null) => {
        if (date) {
            setFieldValue(name, new Date(date));
        }
    };

    return (
        <MuiDatePicker
            toolbarFormat={local}
            label={name}
            value={value}
            onChange={handleChangeDate}
            disableFuture
            renderInput={(params) => {
                return (
                    <TextField
                        id={id}
                        className={classes.text}
                        helperText={touched ? errors : ''}
                        type="date"
                        margin="dense"
                        onBlur={onBlur}
                        variant="outlined"
                        fullWidth
                        {...params}
                        error={Boolean(errors)}
                    />
                );
            }}
        />
    );
};
