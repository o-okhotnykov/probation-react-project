export type LoginResponse = {
    accessToken: string;
    error: { message: string };
    user: IUser;
};

export type RegisterResponse = {
    accessToken: string;
    user: IUser;
};

export type UsersGetResponse = IUser[];

export type IUser = {
    birthDate: string;
    email: string;
    id: number;
    name: string;
    surname: string;
    status: UserStatus;
};

enum UserStatus {
    progress = 'progress',
    register = 'register',
    expired = 'expired',
}
