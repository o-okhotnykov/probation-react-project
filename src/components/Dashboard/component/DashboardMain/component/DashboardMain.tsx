import React from 'react';
import { AddProject } from '../../AddProject';
import { ProjectList } from '../../Projects';
import { VerticalBar } from '../../VerticalBar';

export const DashboardMain: React.FC = () => {
    return (
        <>
            <AddProject />
            <ProjectList />
            <VerticalBar />
        </>
    );
};
