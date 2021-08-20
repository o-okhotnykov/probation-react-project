import React from 'react';
import { ChartsContent } from './components/ChartsContent';
import { AddProject } from './components/AddProject';
import { ProjectList } from './components/ProjectList';

export const DashboardMain: React.FC = () => {
    return (
        <>
            <AddProject />
            <ProjectList />
            <ChartsContent />
        </>
    );
};
