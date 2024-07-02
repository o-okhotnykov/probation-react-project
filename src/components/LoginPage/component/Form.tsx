import React, { FormEvent } from 'react';
import { CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { loginAsync, isAuthorizedSelector } from 'store/user-slice';
import { ILoginFormValues } from 'types';
import { ROUTE_PATH } from 'constants/index';
import logo from 'assets/logo.png';
import { Loading } from 'components/Loading';
import { useStyles } from './styles';
import { TextFieldComponent } from 'components/FormComponent';

export const Form: React.FC<FormikProps<ILoginFormValues>> = (props) => {
    const { values, touched, errors, isValid, dirty, handleChange, handleBlur } = props;
    const dispatch = useDispatch();

    const isAuthorized = useSelector(isAuthorizedSelector);
    const classes = useStyles();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(loginAsync(values));
    };

    if (isAuthorized) {
        return <Redirect to={ROUTE_PATH.dashboard} />;
    }

    return (
        <Box className={classes.formContainer}>
            <Loading apiCall={loginAsync}>
                <form onSubmit={handleSubmit}>
                    <Box className={classes.formContent}>
                        <CardMedia className={classes.media} image={logo} title="Paella dish" />
                        <CardContent>
                            <TextFieldComponent
                                id="email"
                                label="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched.email}
                                errors={errors.email}
                            />
                            <TextFieldComponent
                                id="password"
                                label="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched.password}
                                errors={errors.password}
                            />
                        </CardContent>

                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={!isValid || !dirty}
                        >
                            Login
                        </Button>
                    </Box>
                </form>
                <Typography className={classes.text} variant="body1">
                    Don&apos;t have an account?{' '}
                    <Link to={ROUTE_PATH.register} className={classes.link}>
                        Register
                    </Link>
                </Typography>
            </Loading>
        </Box>
    );
};
