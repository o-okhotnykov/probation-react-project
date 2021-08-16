import { Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import React from 'react';
import { ChartsContent } from './components/ChartsContent';
import { AddProject } from './components/AddProject';
import { ProjectList } from './components/ProjectList';

export const DashboardMain: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Navigation />
                    <AddProject />
                    <ProjectList />
                    <ChartsContent />
                </Grid>
            </Grid>
        </>
    );
};