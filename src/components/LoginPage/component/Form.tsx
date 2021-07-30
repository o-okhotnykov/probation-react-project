import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { FormikProps } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAsync } from '../../../store/user-slice';
import logo from '../../../img/logo.png';
import { useStyles } from './styles';
import { ILoginFormValues } from '../../../interface';
import './LoginPage.scss';

export const Form: React.FC<FormikProps<ILoginFormValues>> = (props) => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;

    const dispatch = useDispatch();
    const classes = useStyles();

    const notify = () =>
        toast.error('🦄 Wow so easy!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        notify();
        event.preventDefault();
        const response = dispatch(loginAsync(values));
        console.log(response);
    };

    return (
        <div className="login-container">
            <ToastContainer />
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
