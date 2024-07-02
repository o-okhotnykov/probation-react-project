import { Box, Button, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { usePatchUserMutation } from 'store/userApi';
import { IUserData } from 'types/api/auth';
import { DatePicker, TextFieldComponent, UploadImg } from 'components/FormComponent';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

type EditUser = {
    id: number;
    name: string;
    surname: string;
    img: string;
    birthDate: string;
};

interface FormProps {
    user: IUserData;
}

export const EditModalForm: React.FC<FormProps> = ({ user }) => {
    const classes = useStyles();
    const [patchUser] = usePatchUserMutation();

    const value = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        img: user.img,
        birthDate: user.birthDate,
    };

    const onSubmit = (values: EditUser) => {
        patchUser({
            id: values.id,
            name: values.name,
            surname: values.surname,
            birthDate: new Date(values.birthDate).toISOString(),
            img: values.img,
        });
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
            <Grid container>
                <Grid item xs={6}>
                    <TextFieldComponent
                        id="name"
                        label="First Name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.name}
                        errors={errors.name}
                    />
                    <TextFieldComponent
                        id="surname"
                        label="Surname"
                        type="text"
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.surname}
                        errors={errors.surname}
                    />
                    <DatePicker
                        id="birthDate"
                        name="birthDate"
                        value={values.birthDate}
                        setFieldValue={setFieldValue}
                        onBlur={handleBlur}
                        errors={errors.birthDate}
                        touched={touched.birthDate}
                    />
                </Grid>
                <Grid item xs={6} className={classes.formPart}>
                    <UploadImg value={values.img} setFieldValue={setFieldValue} />
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
        </form>
    );
};
