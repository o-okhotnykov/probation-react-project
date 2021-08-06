export type LoginResponse = {
    accessToken: string;
    user: IUserData;
};

export type RegisterResponse = {
    accessToken: string;
    user: IUserData;
};

export type IUserData = {
<<<<<<< HEAD
    birthDate?: string;
    email?: string;
    id: number | null;
    name?: string;
    surname?: string;
=======
    birthDate: string;
    email: string;
    id: number;
    name: string;
    surname: string;
>>>>>>> c610b3344678368e8b409b425b847d34ce1ba84c
};
