/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { userDataSelector } from 'store/user-slice';
import defaultProject from 'assets/default-project.png';
import { Project, ProjectState } from 'types/api/project';
import { Loading } from 'components/LoadingGraphql';
import { DatePicker, UploadImg } from 'components/FormComponent';
import { editFormValidator } from './validation';
import { useStyles } from './styles';
import { useMutation } from '@apollo/client';
import { createProject } from './api';
import { successfulToastNotify } from 'toasts';
import { useModalContext } from 'components/ModalComponent/useModalContext';

export const AddProjectForm: React.FC = () => {
    const classes = useStyles();
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const currentUser = useSelector(userDataSelector);
    const [removeProject, { loading }] = useMutation<Project>(createProject);
    const { handleToggle } = useModalContext();

    const [value, setValue] = useState<Project>({
        id: 0,
        title: '',
        reporter: '',
        dateCreate: '',
        dateDue: '',
        stats: ProjectState.open,
        reporterId: 0,
        views: 0,
        img: '',
    });

    useEffect(() => {
        if (currentUser) {
            setValue({
                id: Date.now(),
                title: '',
                reporter: `${currentUser?.name} ${currentUser?.surname}`,
                dateCreate: currentDay,
                dateDue: '',
                stats: ProjectState.open,
                views: 0,
                reporterId: currentUser.id,
                img: defaultProject,
            });
        }
    }, [currentUser, currentDay]);

    const onSubmit = async (values: Project) => {
        await removeProject({ variables: values });
        successfulToastNotify('The project was added');
        handleToggle();
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
            <Loading isLoading={loading}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="title"
                            label="Title"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.title ? errors.title : ''}
                            error={touched.title && Boolean(errors.title)}
                            margin="dense"
                            placeholder="Title"
                            variant="outlined"
                            fullWidth
                        />

                        <DatePicker
                            id="dateDue"
                            name="dateDue"
                            value={values.dateDue}
                            setFieldValue={setFieldValue}
                            onBlur={handleBlur}
                            errors={errors.dateDue}
                            touched={touched.dateDue}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.formPart}>
                        <UploadImg value={values.img} setFieldValue={setFieldValue} />
                    </Grid>
                    <Grid item className={classes.action} xs={12}>
                        <Button color="secondary" variant="contained" onClick={handleToggle}>
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                            disabled={!isValid || !dirty}
                        >
                            Confirm
                        </Button>
                    </Grid>
                </Grid>
            </Loading>
        </form>
    );
};
