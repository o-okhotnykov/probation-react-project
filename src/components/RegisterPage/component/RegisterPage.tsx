import { withFormik } from 'formik';
import { registerValidator } from './validation';
import { Form } from './Form';
import { IRegisterFormValues } from '../../../interface';

export const RegisterPage = withFormik({
    mapPropsToValues: ({
        email,
        name,
        surname,
        password,
        confirmPassword,
        birthDate,
    }: IRegisterFormValues) => {
        return {
            email: email || '',
            name: name || '',
            surname: surname || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            birthDate: birthDate || '',
        };
    },

    validationSchema: registerValidator,

    handleSubmit: () => {},
})(Form);
