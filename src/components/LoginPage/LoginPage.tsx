/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Card, CardContent, CardMedia, TextField, MenuItem, Button } from '@material-ui/core';
import { withFormik } from 'formik';
import { loginValidator } from '../../helper/validator';
import logo from '../../img/logo.png';
import { useStyles } from './styles';
import './LoginPage.scss';

const form = (props: any) => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;

    const classes = useStyles();

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <Card>
                    <CardMedia image={logo} title="Paella dish" />
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

export const Form = withFormik({
    mapPropsToValues: ({ email, password }: any) => {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: loginValidator,

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(form);
