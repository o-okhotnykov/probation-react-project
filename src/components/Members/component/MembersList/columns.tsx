import { Paper, Typography } from '@material-ui/core';
import { theme } from 'components/theme';
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
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    expired: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    progress: {
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
};

export const columns: Column[] = [
    {
        Header: function Name(): ReactElement {
            return <Typography variant="h3">Name</Typography>;
        },
        accessor: 'name',
        Cell: function Name({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function LastName(): ReactElement {
            return <Typography variant="h3">LastName</Typography>;
        },
        accessor: 'surname',
        Cell: function Surname({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function Email(): ReactElement {
            return <Typography variant="h3">Email</Typography>;
        },
        accessor: 'email',
        Cell: function Email({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function BirthDate(): ReactElement {
            return <Typography variant="h3">Birth Date</Typography>;
        },
        accessor: 'birthDate',
        Cell: function BirthDate({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function Status(): ReactElement {
            return <Typography variant="h3">Status</Typography>;
        },
        accessor: 'status',
        Cell: function Progress({ value }: { value: UserStatus }): ReactElement {
            return <Paper style={progressStyle[value]}>{value}</Paper>;
        },
    },
    {
        Header: function Action(): ReactElement {
            return <Typography variant="h3">Action</Typography>;
        },
        accessor: 'id',
        Cell: function Action({ value }: { value: number }): ReactElement {
            return <ActionMenu id={value} />;
        },
    },
];
