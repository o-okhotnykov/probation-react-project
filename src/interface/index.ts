export interface IRegisterFormValues {
    email: string;
    name: string;
    surname: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IRegisterResponse {
    email: string;
    name: string;
    surname: string;
    password: string;
    birthDate: string;
}
