import React, { FormEvent } from 'react';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps } from 'formik';
import { Redirect } from 'react-router-dom';
import { registerAsync, isAuthorizedSelector } from 'store/user-slice';
import { IRegisterFormValues } from 'interface';
import { ROUTE_PATH } from 'constants/index';
import logo from 'img/logo.png';
import { useStyles } from './styles';
import './RegisterPage.scss';

export const Form: React.FC<FormikProps<IRegisterFormValues>> = (props) => {
    const { values, touched, errors, isValid, dirty, handleChange, handleBlur } = props;
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
                birthDate: values.birthDate,
            }),
        );
    };

    if (isAuthorized) {
        return <Redirect to={ROUTE_PATH.dashboard} />;
    }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="form">
                <Card>
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

                    <Button type="submit" color="primary" disabled={!isValid || !dirty}>
                        Register
                    </Button>
                </Card>
            </form>
        </div>
    );
};
