/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { projectsDataSelector, getProjectsAsync } from 'store/project-store';
import { useStyles, StyledTableCell, StyledTableRow } from './style';
import './ProjectList.scss';
import { ProjectItem } from '../ProjectItem/ProjectList';

export const ProjectList: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const moviesData = useSelector(projectsDataSelector);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    return (
        <div className="project-list">
            <>
                {moviesData.map((project) => {
                    return <ProjectItem key={project.id} {...project} />;
                })}
            </>
        </div>
    );
};
