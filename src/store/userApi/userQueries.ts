import { gql } from '@apollo/client';

export const getAllUsers = gql`
    query getAllUsers($page: Int, $perPage: Int) {
        allUsers(page: $page, perPage: $perPage) {
            id
            name
            surname
            email
            birthDate
            role
        }
        _allUsersMeta {
            count
        }
    }
`;

export const getUser = gql`
    query getUser($id: ID!) {
        User(id: $id) {
            id
            name
            surname
            email
            birthDate
            role
        }
    }
`;

export const patchUser = gql`
    mutation patchUser(
        $id: ID!
        $name: String
        $surname: String
        $email: String
        $birthDate: String
        $img: String
        $role: String
    ) {
        updateUser(
            id: $id
            name: $name
            surname: $surname
            email: $email
            birthDate: $birthDate
            img: $img
            role: $role
        ) {
            id
            name
            surname
            email
            birthDate
            role
        }
    }
`;

export const removeUser = gql`
    mutation removeUser($id: ID!) {
        removeUser(id: $id) {
            id
        }
    }
`;
