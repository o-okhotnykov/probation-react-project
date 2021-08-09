import { withFormik } from 'formik';
import { ILoginFormValues } from 'interface/index';
import { loginValidator } from './component/validation';
import { Form } from './component/Form';

export const LoginPage = withFormik({
    mapPropsToValues: ({ email, password }: ILoginFormValues) => {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: loginValidator,

    handleSubmit: (value, { setSubmitting }) => {
        setSubmitting(false);
    },
})(Form);
