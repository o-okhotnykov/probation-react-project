import { useDispatch } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import { Loading } from 'components/Loading';
import { editFormValidator } from './validation';
import { useStyles } from './styles';
import { TextFieldComponent } from 'components/FormComponent';
import { changePasswordAsync } from 'store/user-slice';

interface PasswordValue {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const value: PasswordValue = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
};

export const ChangePasswordForm: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmit = async (values: PasswordValue) => {
        await dispatch(
            changePasswordAsync({
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            }),
        );
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
            <Loading apiCall={changePasswordAsync}>
                <TextFieldComponent
                    id="oldPassword"
                    label="Password"
                    type="password"
                    value={values.oldPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.oldPassword}
                    errors={errors.oldPassword}
                />
                <TextFieldComponent
                    id="newPassword"
                    label="Password"
                    type="password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.newPassword}
                    errors={errors.newPassword}
                />
                <TextFieldComponent
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.confirmPassword}
                    errors={errors.confirmPassword}
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
