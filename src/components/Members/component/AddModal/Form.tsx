import { Box, Button, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getUserAsync, getUsersAsync } from 'store/user-slice';
import { UserRole } from 'types/api/auth';
import { fileToBase64 } from 'helper/base64';
import defaultUser from 'assets/default-user.png';
import { IRegisterResponse } from 'types';
import { useStyles } from './styles';
import { addFormValidator } from './validation';

interface FormProps {
    submit: (data: unknown) => void;
}

export const Form: React.FC<FormProps> = ({ submit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const initialState = {
        email: '',
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        img: defaultUser,
        role: UserRole.default,
    };

    const onSubmit = async (values: IRegisterResponse) => {
        await dispatch(
            submit({
                email: values.email,
                name: values.name,
                surname: values.surname,
                password: values.password,
                birthDate: values.birthDate,
                img: values.img,
                role: values.role,
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
        initialValues: initialState,
        validationSchema: addFormValidator,
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
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        id="email"
                        label="email"
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
                        onBlur={handleBlur}
                        helperText={touched.birthDate ? errors.birthDate : ''}
                        error={touched.birthDate && Boolean(errors.birthDate)}
                    />
                </Grid>
                <Grid item xs={6} className={classes.formPart}>
                    <img src={values.img} alt="user-img" className={classes.userImg} />
                    <Button variant="contained" color="primary" component="label">
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
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={!isValid || !dirty}
                >
                    Confirm
                </Button>
            </Box>
        </form>
    );
};
