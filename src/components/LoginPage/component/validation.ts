import * as yup from 'yup';

const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

export const loginValidator = yup.object().shape({
    password: yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            `Password must contain at least one capital letter and at least one number`,
        )
        .required('Required'),
    email: yup.string().email('The email should look like example@domain.ua').required('Required'),
});
