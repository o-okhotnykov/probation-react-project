import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Loading } from 'components/Loading';
import { getProjectsAsync } from 'store/project-slice';
import { VerticalBar, LineBar, DoughnutBar } from 'components/Charts';

import { useStyles } from './styles';

export const ChartsContent: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h3" className={classes.headerText}>
                PROJECT OVERVIEW
            </Typography>
            <Grid container alignItems="stretch" justifyContent="space-between">
                <Loading apiCall={getProjectsAsync}>
                    <Grid item xs={4} className={classes.chartContent}>
                        <VerticalBar />
                    </Grid>
                    <Grid item xs={4} className={classes.chartContent}>
                        <LineBar />
                    </Grid>
                    <Grid item xs={3} className={classes.chartContent}>
                        <DoughnutBar />
                    </Grid>
                </Loading>
            </Grid>
        </>
    );
};
