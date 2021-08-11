/* eslint-disable react/display-name */
import React, { ChangeEvent, useEffect, useMemo } from 'react';
import { TableComponent } from 'components/Table';
import { getUsersAsync, usersDataSelector, totalUsersSelector } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/Loading';
import { isRequestPendingSelector } from 'store/loading-slice';
import { ActionMenu } from './ActionMenu/ActionMenu';

export const MembersList: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isRequestPendingSelector(getUsersAsync.typePrefix));

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

    const usersData = useSelector(usersDataSelector);
    const totalUsers = useSelector(totalUsersSelector);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
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
                Cell: ({ value }: any) => {
                    return <div className={`member-status member-${value}`}>{value}</div>;
                },
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: <ActionMenu />,
            },
        ],
        [],
    );

    const data = useMemo(() => usersData, [usersData]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="members-list-container">
            {data && (
                <>
                    <TableComponent columns={columns} data={data} />
                    <Pagination
                        count={Math.ceil(totalUsers / LIMIT)}
                        onChange={(event: ChangeEvent<unknown>, page: number) =>
                            dispatch(getUsersAsync({ page, limit: LIMIT }))
                        }
                    />
                </>
            )}
        </div>
    );
};
