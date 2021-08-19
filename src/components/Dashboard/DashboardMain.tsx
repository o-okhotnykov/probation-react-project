import { Box, Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import React from 'react';
import { ChartsContent } from './components/ChartsContent';
import { AddProject } from './components/AddProject';
import { ProjectList } from './components/ProjectList';
import { useStyles } from './style';

export const DashboardMain: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={1} className={classes.sideSection}>
                    <SideSection />
                </Grid>
                <Grid item xs={11}>
                    <Navigation />
                    <Box padding="25px">
                        <AddProject />
                        <ProjectList />
                        <ChartsContent />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
