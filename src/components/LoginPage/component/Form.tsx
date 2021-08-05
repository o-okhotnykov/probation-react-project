import React, { FormEvent } from 'react';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps } from 'formik';
import { Redirect } from 'react-router-dom';
import { loginAsync, isAuthorizedSelector } from 'store/user-slice';
import { ILoginFormValues } from 'interface';
import { ROUTE_PATH } from 'constants/index';
import logo from 'img/logo.png';
import { useStyles } from './styles';
import './LoginPage.scss';

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
        return <Redirect to={ROUTE_PATH.main} />;
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="form">
                <Card className="card-container">
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
                    </CardContent>

                    <Button
                        className={`${classes.btn} form-btn`}
                        type="submit"
                        color="primary"
                        disabled={!isValid || !dirty}
                    >
                        Login
                    </Button>
                </Card>
            </form>
        </div>
    );
};
