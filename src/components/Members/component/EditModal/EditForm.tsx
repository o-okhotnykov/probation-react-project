import React, { useEffect } from 'react';
import { Button, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
    currentUserSelector,
    getUserAsync,
    getUserByIdAsync,
    getUsersAsync,
    patchUserAsync,
} from 'store/user-slice';
import { IEditForm, UserStatus } from 'types/api/auth';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { fileToBase64 } from 'helper/base64';
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
        setFieldValue('status', event.target.value);
    };

    const onSubmit = async (values: IEditForm) => {
        await dispatch(
            patchUserAsync({
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
        dispatch(getUserAsync());
        dispatch(getUsersAsync());
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {currentUser && (
                <Formik
                    initialValues={{
                        name: currentUser.name,
                        surname: currentUser.surname,
                        password: '',
                        confirmPassword: '',
                        birthDate: currentUser.birthDate,
                        status: UserStatus.progress,
                        img: currentUser.img,
                    }}
                    validateOnBlur
                    onSubmit={(values) => onSubmit(values)}
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
                        setFieldValue,
                        dirty,
                    }) => (
                        <form className="form" onSubmit={handleSubmit}>
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
                                    <img
                                        src={values.img}
                                        alt="user-img"
                                        className={classes.userImg}
                                    />
                                    <Button variant="contained" component="label">
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
                                        id="status"
                                        value={values.status}
                                        onChange={(event) => handleSelect(event, setFieldValue)}
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
            )}
        </>
    );
};
