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
        Cell: function Progress({ value }: { value: string }) {
            return <div className={`member-status member-${value}`}>{value}</div>;
        },
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: function Progress({ value }: { value: number }) {
            return <ActionMenu id={value} />;
        },
    },
];
