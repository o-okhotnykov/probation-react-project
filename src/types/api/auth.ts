import { AsyncThunk } from '@reduxjs/toolkit';

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
    role: UserRole;
};

export interface IEditForm {
    name: string;
    surname: string;
    password?: string;
    confirmPassword?: string;
    birthDate: string;
    img: string;
    role?: UserRole;
}
export interface IEditFormResponse {
    email?: string;
    name: string;
    surname: string;
    birthDate: string;
    img: string;
    role: UserRole;
}

export enum UserRole {
    default = 'default',
    contributor = 'contributor',
    admin = 'admin',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncThunkProp = AsyncThunk<any, any, any>;
