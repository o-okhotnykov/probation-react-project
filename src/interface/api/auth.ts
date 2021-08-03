export type LoginResponse = {
    accessToken: string;
    user: IUserData;
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
