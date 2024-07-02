import { Column } from 'react-table';
import { ReactElement } from 'react';
import { UserRole } from 'types/api/auth';

export const columns: Column[] = [
    {
        Header: function Name(): ReactElement {
            return <>Name</>;
        },
        accessor: 'name',
        Cell: function Name({ value }: { value: string }): ReactElement {
            return <>{value}</>;
        },
    },
    {
        Header: function LastName(): ReactElement {
            return <>Last Name</>;
        },
        accessor: 'surname',
        Cell: function Surname({ value }: { value: string }): ReactElement {
            return <>{value}</>;
        },
    },
    {
        Header: function Email(): ReactElement {
            return <>Email</>;
        },
        accessor: 'email',
        Cell: function Email({ value }: { value: string }): ReactElement {
            return <>{value}</>;
        },
    },
    {
        Header: function BirthDate(): ReactElement {
            return <>Birthday</>;
        },
        accessor: 'birthDate',
        Cell: function BirthDate({ value }: { value: string }): ReactElement {
            return <>{value}</>;
        },
    },
    {
        Header: function Role(): ReactElement {
            return <>Role</>;
        },
        accessor: 'role',
        Cell: function Role({ value }: { value: UserRole }): ReactElement {
            return <>{value}</>;
        },
    },
    {
        Header: function Action(): ReactElement {
            return <>Action</>;
        },
        accessor: 'id',
        Cell: function Action({ value }: { value: number }): ReactElement {
            return <>{value}</>;
        },
    },
];

export const userProps = {
    data: [
        {
            birthDate: 'test',
            email: 'test',
            id: 1,
            name: 'Bob',
            surname: 'test',
            img: 'test',
            role: UserRole.default,
        },
        {
            birthDate: 'test',
            email: 'test',
            id: 2,
            name: 'Alex',
            surname: 'test',
            img: 'test',
            role: UserRole.default,
        },
    ],
    columns,
    isDetailedPage: false,
};
