import * as yup from 'yup';
import { PASSWORD_REGEXP } from 'constants/index';

export const editFormValidator = yup.object().shape({
    password: yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            `Password must contain at least one capital letter and at least one number`,
        )
        .required('Required'),
    name: yup.string().required('Required'),
    surname: yup.string().required('Required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Password does not match')
        .required('Confirm your password'),
    birthDate: yup.string().required('Required'),
});
