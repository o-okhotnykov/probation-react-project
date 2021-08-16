import { withFormik } from 'formik';
import { IRegisterFormValues } from 'interface/index';
import { registerValidator } from './component/validation';
import { Form } from './component/Form';

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
