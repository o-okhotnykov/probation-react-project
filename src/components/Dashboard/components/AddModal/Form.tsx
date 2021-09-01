import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { getUserAsync, userDataSelector } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { fileToBase64 } from 'helper/base64';
import defaultProject from 'assets/default-project.png';
import { Loading } from 'components/Loading';
import { Project, ProjectState } from 'types/api/project';
import { addProjectAsync } from 'store/project-slice';
import { editFormValidator } from './validation';
import { useStyles } from './styles';

interface FormProps {
    handleCloseModal: () => void;
    submit: (data: Project) => void;
}

export const Form: React.FC<FormProps> = ({ submit, handleCloseModal }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const currentUser = useSelector(userDataSelector);

    useEffect(() => {
        dispatch(getUserAsync());
    }, [dispatch]);

    const [value, setValue] = useState<Project>({
        id: 0,
        title: '',
        reporter: '',
        dateCreate: '',
        dateDue: '',
        stats: ProjectState.open,
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
                img: defaultProject,
            });
        }
    }, [currentUser, currentDay]);

    const onSubmit = async (values: Project) => {
        await dispatch(submit(values));
        handleCloseModal();
    };

    const handleUpload = async (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        const data = await fileToBase64(event.currentTarget.files![0]);
        setFieldValue('img', data);
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
        <Loading apiCall={addProjectAsync}>
            <form onSubmit={handleSubmit}>
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
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            id="dateDue"
                            type="date"
                            InputProps={{ inputProps: { min: currentDay } }}
                            value={values.dateDue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.dateDue ? errors.dateDue : ''}
                            error={touched.dateDue && Boolean(errors.dateDue)}
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
                    </Grid>
                    <Grid item className={classes.action} xs={12}>
                        <Button color="secondary" variant="contained" onClick={handleCloseModal}>
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
            </form>
        </Loading>
    );
};
