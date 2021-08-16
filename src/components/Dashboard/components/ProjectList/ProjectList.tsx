import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-store';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

export const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const projectsData = useSelector(projectsDataSelector);
    const loading = useSelector(isRequestPendingSelector(getProjectsAsync.typePrefix));

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="project-list">
            <>
                <ProjectHeader />
                {projectsData.map((project) => {
                    return <ProjectItem key={project.id} project={project} />;
                })}
            </>
        </div>
    );
};
