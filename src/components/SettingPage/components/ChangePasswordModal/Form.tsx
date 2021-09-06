/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { getUserAsync, getUserByIdAsync } from 'store/user-slice';
import { AsyncThunkProp, IUserData } from 'types/api/auth';
import { fileToBase64 } from 'helper/base64';

import { Loading } from 'components/Loading';
import { useDispatch } from 'react-redux';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

interface FormProps {
    submit: AsyncThunkProp;
    handleClose: () => void;
}

interface PasswordValue {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const Form: React.FC<FormProps> = ({ submit, handleClose }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const value = { oldPassword: '', newPassword: '', confirmPassword: '' };

    const onSubmit = async (values: PasswordValue) => {
        await dispatch(
            submit({ oldPassword: values.oldPassword, newPassword: values.newPassword }),
        );
        handleClose();
    };

    const formik = useFormik({
        initialValues: value,
        validationSchema: editFormValidator,
        onSubmit,
    });

    const { values, handleSubmit, handleChange, handleBlur, touched, errors, isValid, dirty } =
        formik;

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Loading apiCall={submit}>
                <TextField
                    id="oldPassword"
                    label="Password"
                    type="password"
                    value={values.oldPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.oldPassword ? errors.oldPassword : ''}
                    error={touched.oldPassword && Boolean(errors.oldPassword)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="newPassword"
                    label="Password"
                    type="password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.newPassword ? errors.newPassword : ''}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.confirmPassword ? errors.confirmPassword : ''}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <Box className={classes.action}>
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        disabled={!isValid || !dirty}
                    >
                        Confirm
                    </Button>
                </Box>
            </Loading>
        </form>
    );
};
