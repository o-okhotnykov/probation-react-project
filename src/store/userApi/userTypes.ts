import { UserRole } from 'types/api/auth';

interface User {
    birthDate: string;
    email: string;
    id: number;
    name: string;
    surname: string;
    img: string;
    role: UserRole;
}

export interface PatchUser {
    id: number;
    name: string;
    surname: string;
    birthDate: string;
    img?: string;
    role?: UserRole;
}

export interface GetUserResponse {
    User: User;
}

export interface GetUsersResponse {
    allUsers: User[];
    _allUsersMeta: { count: number };
}
