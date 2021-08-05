import React from 'react';
import { AddProject } from '../../AddProject';
import { ChartsContent } from '../../Charts';
import { ProjectList } from '../../Projects';

export const DashboardMain: React.FC = () => {
    return (
        <>
            <AddProject />
            <ProjectList />
            <ChartsContent />
        </>
    );
};
