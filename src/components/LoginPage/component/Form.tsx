import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { FormikProps } from 'formik';
import { loginAsync } from '../../../store/user-slice';
import logo from '../../../img/logo.png';
import { useStyles } from '../index';
import { ILoginFormValues } from '../../../interface';
import './LoginPage.scss';

export const Form = (props: FormikProps<ILoginFormValues>): any => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(loginAsync(values));
    };

    return (
        <div className="container">
            <form
                onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
                className="form"
            >
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

                    <Button type="submit" color="primary" disabled={isSubmitting}>
                        Login
                    </Button>
                </Card>
            </form>
        </div>
    );
};
