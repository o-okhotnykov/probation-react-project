/* eslint-disable react/display-name */
import React, { ChangeEvent, useEffect, useMemo } from 'react';
import { TableComponent } from 'components/Table';
import { getUsersAsync, usersDataSelector, totalUsersSelector } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/Loading';
import { ActionMenu } from './ActionMenu/ActionMenu';

export const MembersList: React.FC = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(usersDataSelector);

    const [pageState, setPageState] = React.useState(1);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

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
                accessor: 'id',
                Cell: ({ value }) => {
                    return <ActionMenu id={value} />;
                },
            },
        ],
        [],
    );

    const data = useMemo(() => usersData, [usersData]);

    return (
        <Loading apiCall={getUsersAsync}>
            <div className="members-list-container">
                {data && (
                    <>
                        <TableComponent columns={columns} data={data} />
                        <Pagination
                            page={pageState}
                            count={Math.ceil(totalUsers / LIMIT)}
                            onChange={(event: ChangeEvent<unknown>, page: number) => {
                                setPageState(page);
                                dispatch(getUsersAsync({ page, limit: LIMIT }));
                            }}
                        />
                    </>
                )}
            </div>
        </Loading>
    );
};
