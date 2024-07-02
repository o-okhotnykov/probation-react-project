import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { getAllUsers, getUser, patchUser, removeUser } from './userQueries';
import { GetUserResponse, GetUsersResponse, PatchUser } from './userTypes';

enum UserTag {
    users = 'Users',
}

export const userApi = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: 'http://localhost:3030/graphql',
    }),
    tagTypes: [UserTag.users],
    endpoints: (builder) => ({
        getAllUsers: builder.query<GetUsersResponse, { page?: number; perPage?: number }>({
            query: ({ page, perPage }) => ({
                document: getAllUsers,
                variables: {
                    page,
                    perPage,
                },
            }),
            providesTags: (result) => {
                return result
                    ? [
                          ...result.allUsers.map(({ id }) => ({ type: UserTag.users, id })),
                          { type: UserTag.users, id: 'LIST' },
                      ]
                    : [{ type: UserTag.users, id: 'LIST' }];
            },
        }),
        getUser: builder.query<GetUserResponse, { id: number }>({
            query: ({ id }) => ({
                document: getUser,
                variables: {
                    id,
                },
            }),
            providesTags: () => {
                return [{ type: UserTag.users, id: 'LIST' }];
            },
        }),
        patchUser: builder.mutation<void, PatchUser>({
            query: ({ id, name, surname, birthDate, role }) => ({
                document: patchUser,
                variables: {
                    id,
                    name,
                    surname,
                    birthDate,
                    role,
                },
            }),
            invalidatesTags: [{ type: UserTag.users, id: 'LIST' }],
        }),
        removeUser: builder.mutation<void, { id: number }>({
            query: ({ id }) => ({
                document: removeUser,
                variables: {
                    id,
                },
            }),
            invalidatesTags: [{ type: UserTag.users, id: 'LIST' }],
        }),
    }),
});

export const { usePatchUserMutation, useGetUserQuery, useGetAllUsersQuery, useRemoveUserMutation } =
    userApi;
