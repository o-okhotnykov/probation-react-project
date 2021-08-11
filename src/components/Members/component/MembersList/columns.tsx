import React from 'react';
import { ActionMenu } from './ActionMenu/ActionMenu';

export const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Last Name',
        accessor: 'surname',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Birth Date',
        accessor: 'birthDate',
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: function Progress({ value }: { value: string }) {
            return <div className={`member-status member-${value}`}>{value}</div>;
        },
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: <ActionMenu />,
    },
];
