import { withFormik } from 'formik';
import { loginValidator } from './validation';
import { Form } from '../index';
import { IFormValues } from '../Interface/Interfaces';

export const LoginPage = withFormik({
    mapPropsToValues: ({ email, password }: IFormValues) => {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: loginValidator,

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(Form);
