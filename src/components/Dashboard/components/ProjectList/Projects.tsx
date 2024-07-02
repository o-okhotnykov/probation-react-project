import { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { TableComponent } from 'components/Table';
import { Loading } from 'components/LoadingGraphql';
import { LIMIT } from 'constants/index';
import { columns } from './columns';
import { useStyles } from './styles';
import { getAllProjects, GetProjectsResponse } from './api';
import { Project } from 'types/api/project';

export const ProjectList: React.FC = () => {
    const classes = useStyles();

    const [projectsState, setProjectsState] = useState<Project[]>();

    const { data, loading } = useQuery<GetProjectsResponse>(getAllProjects, {
        variables: { perPage: LIMIT, page: 0 },
    });

    useEffect(() => {
        if (data?.allProjects) {
            setProjectsState(data.allProjects);
        }
    }, [data]);

    return (
        <Box padding="30px" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" className={classes.headerText}>
                PROJECT OVERVIEW
            </Typography>
            <Loading isLoading={loading}>
                {projectsState && (
                    <TableComponent columns={columns} data={projectsState} isDetailedPage />
                )}
            </Loading>
        </Box>
    );
};
