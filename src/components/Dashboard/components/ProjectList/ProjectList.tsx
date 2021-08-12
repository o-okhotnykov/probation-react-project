import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-store';
import { ErrorComponent } from 'components/ErrorComponent';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

export const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const moviesData = useSelector(projectsDataSelector);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    if (moviesData.length === 0) {
        return <ErrorComponent />;
    }

    return (
        <div className="project-list">
            <>
                <ProjectHeader />
                {moviesData.map((project) => {
                    return <ProjectItem key={project.id} project={project} />;
                })}
            </>
        </div>
    );
};
