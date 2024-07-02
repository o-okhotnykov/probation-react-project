import React, { FormEvent } from 'react';
import { Typography, CardContent, CardMedia, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { registerAsync, isAuthorizedSelector } from 'store/user-slice';
import { UserRole } from 'types/api/auth';
import { ROUTE_PATH } from 'constants/index';
import logo from 'assets/logo.png';
import { IRegisterFormValues } from 'types';
import defaultUser from 'assets/default-user.png';
import { Loading } from 'components/Loading';
import { useStyles } from './styles';
import { DatePicker, TextFieldComponent } from 'components/FormComponent';

export const Form: React.FC<FormikProps<IRegisterFormValues>> = (props) => {
    const { values, touched, errors, isValid, dirty, handleChange, handleBlur, setFieldValue } =
        props;
    const dispatch = useDispatch();
    const classes = useStyles();
    const isAuthorized = useSelector(isAuthorizedSelector);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(
            registerAsync({
                email: values.email,
                name: values.name,
                surname: values.surname,
                password: values.password,
                birthDate: new Date(values.birthDate).toISOString(),
                img: defaultUser,
                role: UserRole.default,
            }),
        );
    };

    if (isAuthorized) {
        return <Redirect to={ROUTE_PATH.dashboard} />;
    }

    return (
        <Box className={classes.formContainer}>
            <Loading apiCall={registerAsync}>
                <form onSubmit={handleSubmit}>
                    <Box className={classes.formContent}>
                        <CardMedia className={classes.media} image={logo} title="Paella dish" />
                        <CardContent>
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
                        </CardContent>

                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={!isValid || !dirty}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
                <Typography className={classes.text}>
                    Already have an account?{' '}
                    <Link to={ROUTE_PATH.login} className={classes.link}>
                        Login
                    </Link>
                </Typography>
            </Loading>
        </Box>
    );
};
