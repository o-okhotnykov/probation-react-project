import React from 'react';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { FormikProps } from 'formik';
import logo from 'img/logo.png';
import { useStyles } from './styles';
import { IFormValues } from '../Interface/Interfaces';
import './LoginPage.scss';

export const Form: React.FC<FormikProps<IFormValues>> = (props) => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;

    const classes = useStyles();

    return (
        <div className="login-container">
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
