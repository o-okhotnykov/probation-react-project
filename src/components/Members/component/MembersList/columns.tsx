import { Paper } from '@material-ui/core';
import { INFO_LIGHT, INFO_MAIN, WARNING_LIGHT, WARNING_MAIN } from 'constants/colors';
import { CSSProperties, ReactElement } from 'react';
import { Column } from 'react-table';
import { UserStatus } from 'types/api/auth';
import { ActionMenu } from '../ActionMenu';

const memberStatus = {
    'text-transform': 'uppercase',
    padding: '10px',
    borderRadius: '5px',
    'text-align': 'center',
};

const progressStyle: {
    [key in UserStatus]: CSSProperties;
} = {
    register: {
        color: INFO_MAIN,
        backgroundColor: INFO_LIGHT,
        ...memberStatus,
    },
    expired: {
        color: INFO_MAIN,
        backgroundColor: INFO_LIGHT,
        ...memberStatus,
    },
    progress: {
        color: WARNING_MAIN,
        backgroundColor: WARNING_LIGHT,
        ...memberStatus,
    },
};

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
        Cell: function Progress({ value }: { value: UserStatus }): ReactElement {
            return <Paper style={progressStyle[value]}>{value}</Paper>;
        },
    },
    {
        Header: 'Action',
        accessor: 'id',
        Cell: function Action({ value }: { value: number }): ReactElement {
            return <ActionMenu id={value} />;
        },
    },
];
