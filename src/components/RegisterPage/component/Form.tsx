import React, { FormEvent } from 'react';
import { Typography, CardContent, CardMedia, TextField, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import { registerAsync, isAuthorizedSelector } from 'store/user-slice';
import { UserStatus } from 'types/api/auth';
import { ROUTE_PATH } from 'constants/index';
import logo from 'assets/logo.png';
import { IRegisterFormValues } from 'types';
import defaultUser from 'assets/default-user.png';
import { Loading } from 'components/Loading';
import { useStyles } from './styles';

export const Form: React.FC<FormikProps<IRegisterFormValues>> = (props) => {
    const { values, touched, errors, isValid, dirty, handleChange, handleBlur } = props;
    const dispatch = useDispatch();
    const classes = useStyles();
    const isAuthorized = useSelector(isAuthorizedSelector);
    const currentDay = format(new Date(), 'yyyy-MM-dd');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            registerAsync({
                email: values.email,
                name: values.name,
                surname: values.surname,
                password: values.password,
                birthDate: values.birthDate,
                status: UserStatus.register,
                img: defaultUser,
            }),
        );
    };

    if (isAuthorized) {
        return <Redirect to={ROUTE_PATH.dashboard} />;
    }

    return (
        <Box className={classes.formContainer}>
            <Loading apiCall={registerAsync}>
                <form onSubmit={handleSubmit} className="form">
                    <Box className={classes.formContent}>
                        <CardMedia className={classes.media} image={logo} title="Paella dish" />
                        <CardContent>
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.email ? errors.email : ''}
                                error={touched.email && Boolean(errors.email)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                id="name"
                                label="First Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.name ? errors.name : ''}
                                error={touched.name && Boolean(errors.name)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                id="surname"
                                label="Surname"
                                value={values.surname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.surname ? errors.surname : ''}
                                error={touched.surname && Boolean(errors.surname)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.password ? errors.password : ''}
                                error={touched.password && Boolean(errors.password)}
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

                            <TextField
                                id="birthDate"
                                type="date"
                                InputProps={{ inputProps: { max: currentDay } }}
                                defaultValue="2017-05-24"
                                value={values.birthDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.birthDate ? errors.birthDate : ''}
                                error={touched.birthDate && Boolean(errors.birthDate)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
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
