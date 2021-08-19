import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Loading } from 'components/Loading';
import { getProjectsAsync } from 'store/project-slice';
import { VerticalBar, LineBar, DoughnutBar } from 'components/Charts';

export const ChartsContent: React.FC = () => {
    return (
        <Loading apiCall={getProjectsAsync}>
            <Grid container className="chart-container">
                <Grid item xs={4}>
                    <VerticalBar />
                </Grid>
                <Grid item xs={4}>
                    <LineBar />
                </Grid>
                <Grid item xs={4}>
                    <DoughnutBar />
                </Grid>
            </Grid>
        </Loading>
    );
};
