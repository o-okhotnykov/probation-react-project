import React, { ChangeEvent, useEffect, useState } from 'react';
import { TableComponent } from 'components/Table';
import { getUsersAsync, usersDataSelector, totalUsersSelector } from 'store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/Loading';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Box } from '@material-ui/core';
import { columns } from './columns';

export const MembersList: React.FC = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(usersDataSelector);
    const loading = useSelector(isRequestPendingSelector(getUsersAsync.typePrefix));
    const [pageState, setPageState] = useState(1);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

    const totalUsers = useSelector(totalUsersSelector);

    if (loading) {
        return <Loading />;
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            margin="0 auto"
            alignItems="center"
            width="100%"
            padding="30px 0"
        >
            {usersData && (
                <>
                    <TableComponent columns={columns} data={usersData} />
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
        </Box>
    );
};
