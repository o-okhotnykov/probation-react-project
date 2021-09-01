import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { getProjectsAsync, projectsDataSelector } from 'store/project-slice';
import { TableComponent } from 'components/Table';
import { Loading } from 'components/Loading';
import { PAGE, SHORT_LIMIT } from 'constants/index';
import { columns } from './columns';
import { useStyles } from './styles';

export const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProjectsAsync({ page: PAGE, limit: SHORT_LIMIT }));
    }, [dispatch]);

    const projectData = useSelector(projectsDataSelector);

    return (
        <Box padding="30px" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" className={classes.headerText}>
                PROJECT OVERVIEW
            </Typography>
            <Loading apiCall={getProjectsAsync}>
                {projectData && (
                    <TableComponent
                        columns={columns}
                        data={projectData}
                        isDetailedPage
                        sortBy="dateCreate"
                    />
                )}
            </Loading>
        </Box>
    );
};
