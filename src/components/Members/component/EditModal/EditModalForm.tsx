import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { useGetUserQuery, usePatchUserMutation } from 'store/userApi';
import { IEditForm, UserRole } from 'types/api/auth';
import defaultUser from 'assets/default-user.png';
import { Loading } from 'components/LoadingGraphql';
import { SelectRole, DatePicker, UploadImg, TextFieldComponent } from 'components/FormComponent';
import { ChangePasswordForm } from 'components/SettingPage/components/ChangePasswordModal';
import { editFormValidator } from './validation';
import { useStyles } from './styles';
import { useModal } from 'components/ModalComponent/useModal';

interface FormProps {
    id: number;
}

export const EditModalForm: React.FC<FormProps> = ({ id }) => {
    const classes = useStyles();
    const [patchUser] = usePatchUserMutation();
    const { Modal, toggleModal } = useModal({
        title: 'Change Password',
        body: <ChangePasswordForm />,
    });

    const [value, setValue] = useState({
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        role: UserRole.default,
        img: defaultUser,
    });
    const { data: currentUser, isLoading } = useGetUserQuery({ id });

    useEffect(() => {
        if (currentUser?.User) {
            const { User } = currentUser;
            setValue({
                name: User.name,
                surname: User.surname,
                password: '',
                confirmPassword: '',
                birthDate: User.birthDate,
                role: User.role,
                img: User.img,
            });
        }
    }, [currentUser]);

    const onSubmit = (values: IEditForm) => {
        patchUser({
            id,
            name: values.name,
            surname: values.surname,
            birthDate: new Date(values.birthDate).toISOString(),
            img: values.img,
            role: values.role,
        });
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
            <Loading isLoading={isLoading}>
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
                        <TextFieldComponent
                            id="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.password}
                            errors={errors.password}
                        />
                        <TextFieldComponent
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.confirmPassword}
                            errors={errors.confirmPassword}
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
                        <Button
                            variant="contained"
                            component="label"
                            color="primary"
                            onClick={toggleModal}
                        >
                            Change password
                        </Button>
                        <SelectRole value={values.role} setFieldValue={setFieldValue} />
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
            <Modal />
        </form>
    );
};
