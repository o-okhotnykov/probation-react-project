/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { getUserAsync, getUserByIdAsync } from 'store/user-slice';
import { IUserData } from 'types/api/auth';
import { fileToBase64 } from 'helper/base64';

import { Loading } from 'components/Loading';
import { useDispatch } from 'react-redux';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

type EditUser = {
    name: string;
    surname: string;
    img: string;
    birthDate: string;
};

interface FormProps {
    user: IUserData;
    submit: (data: unknown) => void;
}

export const Form: React.FC<FormProps> = ({ user, submit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const value = {
        name: user.name,
        surname: user.surname,
        img: user.img,
        birthDate: user.birthDate,
    };

    const onSubmit = async (values: EditUser) => {
        await dispatch(
            submit({
                id: user.id,
                values,
            }),
        );
        dispatch(getUserAsync());
    };

    const handleUpload = async (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        const data = await fileToBase64(event.currentTarget.files![0]);
        setFieldValue('img', data);
    };

    const handleChangeDate = (
        event: MaterialUiPickersDate,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        if (event) {
            const date = format(event, 'yyyy-MM-dd');
            setFieldValue('birthDate', date);
        }
    };

    const formik = useFormik({
        initialValues: value,
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

                        <KeyboardDatePicker
                            className={classes.date}
                            disableToolbar
                            margin="normal"
                            format="yyyy-MM-dd"
                            inputVariant="outlined"
                            placeholder="yyyy-MM-dd"
                            id="birthDate"
                            disableFuture
                            value={values.birthDate}
                            onChange={(event) => handleChangeDate(event, setFieldValue)}
                            helperText={touched.birthDate ? errors.birthDate : ''}
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
