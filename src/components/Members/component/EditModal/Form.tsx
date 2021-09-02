import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import {
    currentUserSelector,
    getUserAsync,
    getUserByIdAsync,
    getUsersAsync,
} from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { IEditForm, UserRole } from 'types/api/auth';
import { fileToBase64 } from 'helper/base64';
import defaultUser from 'assets/default-user.png';
import { Loading } from 'components/Loading';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

interface FormProps {
    id: number;
    submit: (data: unknown) => void;
}

export const Form: React.FC<FormProps> = ({ id, submit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const currentUser = useSelector(currentUserSelector);

    const [value, setValue] = useState({
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        role: UserRole.default,
        img: defaultUser,
    });

    useEffect(() => {
        if (id) {
            dispatch(getUserByIdAsync(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (currentUser) {
            setValue({
                name: currentUser.name,
                surname: currentUser.surname,
                password: '',
                confirmPassword: '',
                birthDate: currentUser.birthDate,
                role: currentUser.role,
                img: currentUser.img,
            });
        }
    }, [currentUser]);

    const onSubmit = async (values: IEditForm) => {
        await dispatch(
            submit({
                id,
                values: {
                    name: values.name,
                    surname: values.surname,
                    birthDate: values.birthDate,
                    img: values.img,
                    role: values.role,
                },
            }),
        );

        dispatch(getUserAsync());
        dispatch(getUsersAsync());
    };

    const handleUpload = async (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        const data = await fileToBase64(event.currentTarget.files![0]);
        setFieldValue('img', data);
    };

    const handleSelect = (
        event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        setFieldValue('role', event.target.value);
    };

    const formik = useFormik({
        initialValues: value,
        enableReinitialize: true,
        validationSchema: editFormValidator,
        onSubmit,
    });

    const {
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
        setFieldValue,
        isValid,
        dirty,
    } = formik;

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Loading apiCall={getUserByIdAsync}>
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
                    </Grid>
                    <Grid item xs={6} className={classes.formPart}>
                        <img src={values.img} alt="user-img" className={classes.userImg} />
                        <Button variant="contained" component="label" color="primary">
                            Upload File
                            <input
                                style={{ display: 'none' }}
                                id="file"
                                name="file"
                                type="file"
                                onChange={(event) => handleUpload(event, setFieldValue)}
                            />
                        </Button>
                        <Select
                            id="role"
                            value={values.role}
                            variant="outlined"
                            color="primary"
                            className={classes.select}
                            onChange={(event) => handleSelect(event, setFieldValue)}
                        >
                            <MenuItem id="status" value={UserRole.admin}>
                                Admin
                            </MenuItem>
                            <MenuItem id="status" value={UserRole.contributor}>
                                Contributor
                            </MenuItem>
                            <MenuItem id="status" value={UserRole.default}>
                                Default
                            </MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Box className={classes.action}>
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        disabled={!isValid || !dirty}
                    >
                        Confirm
                    </Button>
                </Box>
            </Loading>
        </form>
    );
};
