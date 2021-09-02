import * as yup from 'yup';

export const editFormValidator = yup.object().shape({
    title: yup.string().required('Required'),
    dateDue: yup.string().required('Required'),
});
