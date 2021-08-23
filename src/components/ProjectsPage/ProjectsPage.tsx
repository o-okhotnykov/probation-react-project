/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableComponent } from 'components/Table';
import { getProjectsAsync, projectsDataSelector, projectsTotalSelector } from 'store/project-slice';
import { Pagination } from '@material-ui/lab';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/Loading';
import { Box, Typography } from '@material-ui/core';
import { columns } from './columns';
import { useStyles } from './styles';

export const ProjectsPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    const classes = useStyles();
    const projectData = useSelector(projectsDataSelector);
    const [pageState, setPageState] = useState(1);
    const totalUsers = useSelector(projectsTotalSelector);

    return (
        <Box padding="30px" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" className={classes.headerText}>
                PROJECT OVERVIEW
            </Typography>
            <Loading apiCall={getProjectsAsync}>
                {projectData && (
                    <>
                        <TableComponent columns={columns} data={projectData} />
                        <Pagination
                            page={pageState}
                            count={Math.ceil(totalUsers / LIMIT)}
                            onChange={(event: ChangeEvent<unknown>, page: number) => {
                                setPageState(page);
                                dispatch(getProjectsAsync({ page, limit: LIMIT }));
                            }}
                        />
                    </>
                )}
            </Loading>
        </Box>
    );
};
