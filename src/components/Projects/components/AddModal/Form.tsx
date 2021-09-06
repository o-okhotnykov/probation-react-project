import { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector } from 'store/user-slice';
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

    const handleChangeDate = (
        event: MaterialUiPickersDate,
        setFieldValue: (field: string, value: unknown) => void,
    ) => {
        if (event) {
            const date = format(event, 'yyyy-MM-dd');
            setFieldValue('dateDue', date);
        }
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
        <form onSubmit={handleSubmit}>
            <Loading apiCall={addProjectAsync}>
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

                        <KeyboardDatePicker
                            className={classes.date}
                            disableToolbar
                            margin="normal"
                            format="yyyy-MM-dd"
                            inputVariant="outlined"
                            placeholder="yyyy-MM-dd"
                            id="dateDue"
                            disablePast
                            value={values.dateDue}
                            onChange={(event) => handleChangeDate(event, setFieldValue)}
                            onBlur={handleBlur}
                            helperText={touched.dateDue ? errors.dateDue : ''}
                            error={touched.dateDue && Boolean(errors.dateDue)}
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
            </Loading>
        </form>
    );
};
