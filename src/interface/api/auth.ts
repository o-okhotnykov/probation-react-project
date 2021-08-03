export type LoginResponse = {
    accessToken: string;
<<<<<<< HEAD
    user: IUserData;
=======
    error: { message: string };
    user: {
        birthDate: string;
        email: string;
        id: number;
        name: string;
        surname: string;
    };
>>>>>>> df8b6e103352dcef61aa4d287508bc64b8829813
};

export type RegisterResponse = {
    accessToken: string;
    user: IUserData;
};

export type IUserData = {
    birthDate: string;
    email: string;
    id: number | null;
    name: string;
    surname: string;
};
