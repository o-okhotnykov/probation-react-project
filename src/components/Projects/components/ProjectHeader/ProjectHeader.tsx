import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const ProjectHeader: React.FC = () => {
    return (
        <Grid container className="project-item">
            <Grid item xs={2}>
                <Typography>RECENT PROJECTS</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>CREATED</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>REPORTER</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>DUE</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>STATS</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>ACTIONS</Typography>
            </Grid>
        </Grid>
    );
};
