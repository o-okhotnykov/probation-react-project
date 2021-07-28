import { withFormik } from 'formik';
import { registerValidator } from './validation';
import { Form } from '../index';
import { IFormValues } from '../Interface/Interfaces';

export const RegisterPage = withFormik({
    mapPropsToValues: ({ name, surname, password, confirmPassword, birthDate }: IFormValues) => {
        return {
            name: name || '',
            surname: surname || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            birthDate: birthDate || '',
        };
    },

    validationSchema: registerValidator,

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(Form);
