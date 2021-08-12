export type LoginResponse = {
    accessToken: string;
    user: IUserData;
};

export type RegisterResponse = {
    accessToken: string;
    user: IUserData;
};

export type UsersGetResponse = IUserData[];

export type IUserData = {
    birthDate: string;
    email: string;
    id: number;
    name: string;
    surname: string;
    img: string;
    status: UserStatus;
};

export interface IEditForm {
    name: string;
    surname: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    img: string;
    status: UserStatus;
}

export enum UserStatus {
    progress = 'progress',
    register = 'register',
    expired = 'expired',
}
