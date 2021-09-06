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
}

interface PasswordValue {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const Form: React.FC<FormProps> = ({ submit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const value = { oldPassword: '', newPassword: '', confirmPassword: '' };

    const onSubmit = async (values: PasswordValue) => {
        console.log(1);
    };

    const formik = useFormik({
        initialValues: value,
        validationSchema: editFormValidator,
        onSubmit,
    });

    const {
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
        setFieldValue,
        isValid,
        dirty,
    } = formik;

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Loading apiCall={submit}>
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
