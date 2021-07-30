export type LoginResponse = {
    accessToken: string;
    error: { message: string };
    user: {
        birthDate: string;
        email: string;
        id: number;
        name: string;
        surname: string;
    };
};

export type RegisterResponse = {
    accessToken: string;
    user: {
        birthDate: string;
        email: string;
        id: number;
        name: string;
        surname: string;
    };
};
