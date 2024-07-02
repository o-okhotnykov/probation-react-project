import { Paper, Typography } from '@material-ui/core';
import { useFormatDate } from 'context/FormatDateProvider';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Column } from 'react-table';
import { isAdminSelector } from 'store/user-slice';
import { UserRole } from 'types/api/auth';
import { ActionMenu } from '../ActionMenu';
import { useStyles } from './style';

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
            return <Typography variant="h3">Last Name</Typography>;
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
            return (
                <Typography variant="body1" style={{ textTransform: 'lowercase' }}>
                    {value}
                </Typography>
            );
        },
    },
    {
        Header: function BirthDate(): ReactElement {
            return <Typography variant="h3">Birth Date</Typography>;
        },
        accessor: 'birthDate',
        Cell: function BirthDate({ value }: { value: string }): ReactElement {
            const { formatDate } = useFormatDate();
            return <Typography variant="body1">{formatDate(value)}</Typography>;
        },
    },
    {
        Header: function Role(): ReactElement {
            return <Typography variant="h3">Role</Typography>;
        },
        accessor: 'role',
        Cell: function Role({ value }: { value: UserRole }): ReactElement {
            const classes = useStyles();
            return <Paper className={classes[value]}>{value}</Paper>;
        },
    },
    {
        Header: function Action(): ReactElement {
            const isAdmin = useSelector(isAdminSelector);

            return <>{isAdmin && <Typography variant="h3">Action</Typography>}</>;
        },
        accessor: 'id',
        Cell: function Action({ value }: { value: number }): ReactElement {
            const isAdmin = useSelector(isAdminSelector);
            return <>{isAdmin && <ActionMenu id={value} />}</>;
        },
    },
];
