import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-slice';
import { Loading } from 'components/Loading';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

export const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const projectsData = useSelector(projectsDataSelector);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    return (
        <Loading apiCall={getProjectsAsync}>
            <div className="project-list">
                <ProjectHeader />

                {projectsData.map((project) => {
                    return <ProjectItem key={project.id} project={project} />;
                })}
            </div>
        </Loading>
    );
};
