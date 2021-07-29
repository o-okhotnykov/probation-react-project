export type LoginResponse = {
    accessToken: string;
    user: {
        birthDate: string;
        confirmPassword: string;
        email: string;
        id: number;
        name: string;
        surname: string;
    };
};
