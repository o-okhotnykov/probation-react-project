/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Button, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { Field, Formik } from 'formik';
import {
    currentUserSelector,
    getUserAsync,
    getUserByIdAsync,
    getUsersAsync,
    patchUserAsync,
} from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { IEditForm, UserStatus } from 'types/api/auth';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { fileToBase64 } from 'helper/base64';
import defaultUser from 'assets/default-user.png';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

interface FormProps {
    id: number | null;
    submit: any;
}

export const Form: React.FC<FormProps> = ({ id, submit }) => {
    const classes = useStyles();
    const currentDay = format(new Date(), 'yyyy-MM-dd');

    const dispatch = useDispatch();

    let initialValue: IEditForm = {
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        status: UserStatus.progress,
        img: defaultUser,
    };

    if (id) {
        const loading = useSelector(isRequestPendingSelector(getUserByIdAsync.typePrefix));

        useEffect(() => {
            dispatch(getUserByIdAsync(id));
        }, [dispatch, id]);

        const currentUser = useSelector(currentUserSelector);

        initialValue = {
            name: currentUser!.name,
            surname: currentUser!.surname,
            password: '',
            confirmPassword: '',
            birthDate: currentUser!.birthDate,
            status: UserStatus.progress,
            img: currentUser!.img,
        };

        if (loading) {
            return <Loading />;
        }
    }

    const handleSubmit = async (values: IEditForm) => {
        if (id !== null) {
            await dispatch(
                submit({
                    id,
                    values: {
                        name: values.name,
                        surname: values.surname,
                        birthDate: values.birthDate,
                        img: values.img,
                        status: values.status,
                    },
                }),
            );

            await dispatch(getUserAsync());
            await dispatch(getUsersAsync());
        } else {
            await dispatch(
                submit({
                    email: `${values.name}@default.test`,
                    password: values.password,
                    name: values.name,
                    surname: values.surname,
                    birthDate: values.birthDate,
                    img: values.img,
                    status: values.status,
                }),
            );

            await dispatch(getUsersAsync());
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValue}
                validateOnBlur
                onSubmit={(values) => console.log(values)}
                validationSchema={editFormValidator}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    setFieldValue,
                    dirty,
                }) => (
                    <form
                        className="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(values);
                        }}
                    >
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
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.confirmPassword ? errors.confirmPassword : ''
                                    }
                                    error={
                                        touched.confirmPassword && Boolean(errors.confirmPassword)
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
                            <Grid item xs={6} className={classes.formPart}>
                                <img src={values.img} alt="user-img" className={classes.userImg} />
                                <Button variant="contained" component="label">
                                    Upload File
                                    <input
                                        style={{ display: 'none' }}
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={async (event) => {
                                            const data = await fileToBase64(
                                                event.currentTarget.files![0],
                                            );
                                            setFieldValue('img', data);
                                        }}
                                    />
                                </Button>
                                <Select
                                    id="status"
                                    value={values.status}
                                    onChange={(event) =>
                                        setFieldValue('status', event.target.value)
                                    }
                                >
                                    <MenuItem id="status" value={UserStatus.progress}>
                                        Progress
                                    </MenuItem>
                                    <MenuItem id="status" value={UserStatus.register}>
                                        Register
                                    </MenuItem>
                                    <MenuItem id="status" value={UserStatus.expired}>
                                        Expired
                                    </MenuItem>
                                </Select>
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
        </>
    );
};
