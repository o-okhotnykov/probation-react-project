import React from 'react';
import { Card, CardContent, CardMedia, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FormikProps } from 'formik';
import { registerAsync } from '../../../store/user-slice';
import logo from '../../../img/logo.png';
import { useStyles } from '../index';
import { IRegisterFormValues } from '../../../interface';
import './RegisterPage.scss';

export const Form = (props: FormikProps<IRegisterFormValues>): any => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;

    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = async () => {
        dispatch(registerAsync());
    };

    return (
        <div className="container">
            <form onSubmit={() => handleSubmit()} className="form">
                <Card>
                    <CardMedia className={classes.media} image={logo} title="Paella dish" />
                    <CardContent>
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

                    <Button type="submit" color="primary" disabled={isSubmitting}>
                        Register
                    </Button>
                </Card>
            </form>
        </div>
    );
};
