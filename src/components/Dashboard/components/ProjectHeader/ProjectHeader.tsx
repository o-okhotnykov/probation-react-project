import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const ProjectHeader: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <Typography variant="h3">RECENT PROJECTS</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3">CREATED</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3">REPORTER</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3">DUE</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3">STATS</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h3">ACTIONS</Typography>
            </Grid>
        </Grid>
    );
};
