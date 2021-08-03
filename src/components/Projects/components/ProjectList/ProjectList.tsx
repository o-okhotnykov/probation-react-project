/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-store';
import { ErrorComponent } from 'components/ErrorComponent';
import { Project } from 'interface/api/project';
import { useStyles, StyledTableCell, StyledTableRow } from './style';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import './ProjectList.scss';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

export const ProjectList: React.FC = () => {
    const classes = useStyles();
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
                {moviesData.map((project: Project) => {
                    return <ProjectItem key={project.id} {...project} />;
                })}
            </>
        </div>
    );
};
