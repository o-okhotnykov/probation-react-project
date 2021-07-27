/* eslint-disable @typescript-eslint/no-unused-vars */
import { withFormik } from 'formik';
import { registerValidator } from '../../../helper/validator';
import { Form } from '../index';
import { IRegisterFormValues } from '../../../interface/index';

export const RegisterPage = withFormik({
    mapPropsToValues: ({
        name,
        surname,
        password,
        confirmPassword,
        birthDate,
    }: IRegisterFormValues) => {
        return {
            name: name || '',
            surname: surname || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            birthDate: birthDate || '',
        };
    },

    validationSchema: registerValidator,

    handleSubmit: (values, { setSubmitting }) => {},
})(Form);
