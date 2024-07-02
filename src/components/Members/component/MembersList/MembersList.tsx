import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { TableComponent } from 'components/Table';
import { useGetAllUsersQuery } from 'store/userApi';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/LoadingGraphql';
import { columns } from './columns';

export const MembersList: React.FC = () => {
    const [pageState, setPageState] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);

    const { data: users, isLoading } = useGetAllUsersQuery({ page: pageState - 1, perPage: LIMIT });

    useEffect(() => {
        if (users) {
            setTotalUsers(users?._allUsersMeta.count);
        }
    }, [users]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            margin="0 auto"
            alignItems="center"
            width="100%"
            padding="30px 0"
        >
            <Loading isLoading={isLoading}>
                {users?.allUsers && (
                    <>
                        <TableComponent
                            columns={columns}
                            data={users?.allUsers}
                            isDetailedPage={false}
                        />
                        <Pagination
                            page={pageState}
                            count={Math.ceil(totalUsers / LIMIT)}
                            onChange={(event: ChangeEvent<unknown>, page: number) => {
                                setPageState(page);
                            }}
                        />
                    </>
                )}
            </Loading>
        </Box>
    );
};
