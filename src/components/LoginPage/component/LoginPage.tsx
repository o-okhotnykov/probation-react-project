import { withFormik } from 'formik';
import { ILoginFormValues } from 'interface/index';
import { loginValidator } from './validation';
import { Form } from './Form';

export const LoginPage = withFormik({
    mapPropsToValues: ({ email, password }: ILoginFormValues) => {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: loginValidator,

    handleSubmit: () => {},
})(Form);
