import React from 'react';
import { ChartsContent } from 'components/Charts';
import { AddProject } from './components/AddProject';
import { ProjectList } from './components/Projects';

export const DashboardMain: React.FC = () => {
    return (
        <>
            <AddProject />
            <ProjectList />
            <ChartsContent />
        </>
    );
};
