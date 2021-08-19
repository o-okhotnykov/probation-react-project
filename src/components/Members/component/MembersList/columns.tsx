import { Paper, Typography } from '@material-ui/core';
import {
    ERROR_LIGHT,
    ERROR_MAIN,
    INFO_LIGHT,
    INFO_MAIN,
    WARNING_LIGHT,
    WARNING_MAIN,
} from 'constants/colors';
import { CSSProperties, ReactElement } from 'react';
import { Column } from 'react-table';
import { UserStatus } from 'types/api/auth';
import { ActionMenu } from '../ActionMenu';

const memberStatus = {
    padding: '10px',
    borderRadius: '5px',
};

const progressStyle: {
    [key in UserStatus]: CSSProperties;
} = {
    register: {
        color: INFO_MAIN,
        backgroundColor: INFO_LIGHT,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    expired: {
        color: ERROR_MAIN,
        backgroundColor: ERROR_LIGHT,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    progress: {
        color: WARNING_MAIN,
        backgroundColor: WARNING_LIGHT,
        textTransform: 'uppercase',
        ...memberStatus,
    },
};

export const columns: Column[] = [
    {
        Header: 'Name',
        accessor: 'name',
        Cell: function Name({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: 'Last Name',
        accessor: 'surname',
        Cell: function Surname({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: 'Email',
        accessor: 'email',
        Cell: function Email({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: 'Birth Date',
        accessor: 'birthDate',
        Cell: function BirthDate({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
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
