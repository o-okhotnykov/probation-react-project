import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import { getProjectsAsync, projectsDataSelector, projectsTotalSelector } from 'store/project-slice';
import { TableComponent } from 'components/Table';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/Loading';
import { columns } from './columns';
import { useStyles } from './styles';

export const Projects: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [pageState, setPageState] = useState(1);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    const projectData = useSelector(projectsDataSelector);
    const totalUsers = useSelector(projectsTotalSelector);

    const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        setPageState(page);
        dispatch(getProjectsAsync({ page, limit: LIMIT }));
    };

    return (
        <Box padding="30px" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" className={classes.headerText}>
                PROJECT OVERVIEW
            </Typography>
            <Loading apiCall={getProjectsAsync}>
                {projectData && (
                    <>
                        <TableComponent columns={columns} data={projectData} isDetailedPage />
                        <Pagination
                            page={pageState}
                            count={Math.ceil(totalUsers / LIMIT)}
                            onChange={(event, page) => handleChangePage(event, page)}
                        />
                    </>
                )}
            </Loading>
        </Box>
    );
};