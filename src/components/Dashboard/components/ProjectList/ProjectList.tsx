import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-slice';
import { Loading } from 'components/Loading';
import { Box } from '@material-ui/core';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

export const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const projectsData = useSelector(projectsDataSelector);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    return (
        <Box
            padding="30px 0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Loading apiCall={getProjectsAsync}>
                <ProjectHeader />

                {projectsData.map((project) => {
                    return <ProjectItem key={project.id} project={project} />;
                })}
            </Loading>
        </Box>
    );
};
