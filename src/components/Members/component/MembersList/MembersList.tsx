/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import { TableComponent } from 'components/Table';
import { getUsersAsync, usersDataSelector } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { ActionMenu } from '../ActionMenu/ActionMenu';

export const MembersList: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

    const usersData = useSelector(usersDataSelector);

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

    return (
        <>
            <div className="members-list-container">
                <TableComponent columns={columns} data={data} />
            </div>
        </>
    );
};
