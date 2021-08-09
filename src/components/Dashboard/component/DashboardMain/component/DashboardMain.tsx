import { Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import React from 'react';
import { AddProject } from '../../AddProject';
import { ChartsContent } from '../../Charts';
import { ProjectList } from '../../Projects';

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
