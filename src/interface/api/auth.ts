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
    status: UserStatus;
};

enum UserStatus {
    progress = 'progress',
    register = 'register',
    expired = 'expired',
}
