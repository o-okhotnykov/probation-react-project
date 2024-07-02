import { ChangeEvent, useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import { TableComponent } from 'components/Table';
import { LIMIT } from 'constants/index';
import { Loading } from 'components/LoadingGraphql';
import { columns } from './columns';
import { AddProject } from './components/AddProject';
import { useQuery } from '@apollo/client';
import { Project } from 'types/api/project';

import { getAllProjects, getTotalCount, GetProjectsResponse, GetTotalCountResponse } from './api';

export const Projects: React.FC = () => {
    const [pageState, setPageState] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [projectsState, setProjectsState] = useState<Project[]>();

    const { data: projectsData, loading } = useQuery<GetProjectsResponse>(getAllProjects, {
        variables: { perPage: LIMIT, page: pageState },
    });

    const { data: totalCountData } = useQuery<GetTotalCountResponse>(getTotalCount);

    useEffect(() => {
        if (projectsData?.allProjects) {
            setProjectsState(projectsData.allProjects);
        }
    }, [projectsData]);

    useEffect(() => {
        if (totalCountData?._allProjectsMeta?.count) {
            setTotalCount(totalCountData._allProjectsMeta.count);
        }
    }, [totalCountData]);

    const handleChangePage = (event: ChangeEvent<unknown>) => {
        event.preventDefault();
        setPageState((prevState) => prevState + 1);
    };

    return (
        <Box padding="30px" display="flex" flexDirection="column" alignItems="center">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                alignSelf="flex-start"
            >
                <Typography variant="h1">Projects List</Typography>
                <Typography variant="subtitle1">
                    List of projects that are already available on ProManage
                </Typography>
            </Box>
            <AddProject />
            <Loading isLoading={loading}>
                {projectsState && (
                    <>
                        <TableComponent columns={columns} data={projectsState} isDetailedPage />
                        <Pagination
                            page={pageState + 1}
                            count={Math.ceil(totalCount / LIMIT)}
                            onChange={(event) => handleChangePage(event)}
                        />
                    </>
                )}
            </Loading>
        </Box>
    );
};
