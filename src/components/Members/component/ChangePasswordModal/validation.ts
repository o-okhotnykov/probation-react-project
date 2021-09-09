import { PASSWORD_REGEXP } from 'constants/index';
import * as yup from 'yup';

export const editFormValidator = yup.object().shape({
    oldPassword: yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            `Password must contain at least one capital letter and at least one number`,
        )
        .required('Required'),
    newPassword: yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            `Password must contain at least one capital letter and at least one number`,
        )
        .required('Required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Password does not match')
        .required('Confirm your password'),
});
