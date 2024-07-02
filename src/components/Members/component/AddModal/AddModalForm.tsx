import { Box, Button, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getUserAsync, registerAsync } from 'store/user-slice';
import { UserRole } from 'types/api/auth';
import defaultUser from 'assets/default-user.png';
import { IRegisterResponse } from 'types';
import { DatePicker, SelectRole, TextFieldComponent, UploadImg } from 'components/FormComponent';
import { useStyles } from './styles';
import { addFormValidator } from './validation';

export const AddModalForm: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const initialState = {
        email: '',
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        img: defaultUser,
        role: UserRole.default,
    };

    const onSubmit = async (values: IRegisterResponse) => {
        await dispatch(
            registerAsync({
                email: values.email,
                name: values.name,
                surname: values.surname,
                password: values.password,
                birthDate: new Date(values.birthDate).toISOString(),
                img: values.img,
                role: values.role,
            }),
        );

        dispatch(getUserAsync());
    };

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: addFormValidator,
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
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextFieldComponent
                        id="email"
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.email}
                        errors={errors.email}
                    />
                    <TextFieldComponent
                        id="name"
                        label="First Name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.name}
                        errors={errors.name}
                    />
                    <TextFieldComponent
                        id="surname"
                        label="Surname"
                        type="text"
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.surname}
                        errors={errors.surname}
                    />
                    <TextFieldComponent
                        id="password"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.password}
                        errors={errors.password}
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
                    <DatePicker
                        id="birthDate"
                        name="birthDate"
                        value={values.birthDate}
                        setFieldValue={setFieldValue}
                        onBlur={handleBlur}
                        errors={errors.birthDate}
                        touched={touched.birthDate}
                    />
                </Grid>
                <Grid item xs={6} className={classes.formPart}>
                    <UploadImg value={values.img} setFieldValue={setFieldValue} />
                    <SelectRole value={values.role} setFieldValue={setFieldValue} />
                </Grid>
            </Grid>
            <Box className={classes.action}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={!isValid || !dirty}
                >
                    Confirm
                </Button>
            </Box>
        </form>
    );
};
