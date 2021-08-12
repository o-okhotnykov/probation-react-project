/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useEffect } from 'react';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';

import { format } from 'date-fns';
import { Formik } from 'formik';
import { currentUserSelector, getUserByIdAsync } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { UserStatus } from 'types/api/auth';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

export const EditForm: React.FC<{ id: number }> = ({ id }) => {
    const classes = useStyles();
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const dispatch = useDispatch();
    const loading = useSelector(isRequestPendingSelector(getUserByIdAsync.typePrefix));

    useEffect(() => {
        dispatch(getUserByIdAsync(id));
    }, [dispatch, id]);

    const currentUser = useSelector(currentUserSelector);
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            {currentUser && (
                <Formik
                    initialValues={{
                        name: currentUser?.name,
                        surname: currentUser?.surname,
                        password: '',
                        confirmPassword: '',
                        birthDate: currentUser?.birthDate,
                        status: UserStatus.progress,
                        img: '',
                    }}
                    validateOnBlur
                    onSubmit={(value) => console.log(value)}
                    validationSchema={editFormValidator}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isValid,
                        handleSubmit,
                        dirty,
                    }) => (
                        <form className="form">
                            <Grid container>
                                <Grid item xs={6}>
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
                                        type="current-password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={
                                            touched.confirmPassword ? errors.confirmPassword : ''
                                        }
                                        error={
                                            touched.confirmPassword &&
                                            Boolean(errors.confirmPassword)
                                        }
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
                                </Grid>
                                <Grid item xs={6}>
                                    img
                                </Grid>
                            </Grid>

                            <Button
                                className={`${classes.btn} form-btn`}
                                type="submit"
                                color="primary"
                                disabled={!isValid || !dirty}
                            >
                                Confirm
                            </Button>
                        </form>
                    )}
                </Formik>
            )}
        </>
    );
};
