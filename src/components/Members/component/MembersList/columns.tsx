import React, { ReactElement } from 'react';

import { Column } from 'react-table';
import { ActionMenu } from '../ActionMenu';

export const columns: Column[] = [
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
        Cell: function Progress({ value }: { value: string }): ReactElement {
            return <div className={`member-status member-${value}`}>{value}</div>;
        },
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: <ActionMenu />,
    },
];
