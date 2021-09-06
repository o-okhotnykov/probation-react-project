import * as yup from 'yup';

export const editFormValidator = yup.object().shape({
    name: yup.string().required('Required'),
    surname: yup.string().required('Required'),
    birthDate: yup.string().required('Required'),
});
