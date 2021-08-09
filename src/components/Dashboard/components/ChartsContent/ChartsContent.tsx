import Grid from '@material-ui/core/Grid';
import React from 'react';
import { VerticalBar, LineBar, DoughnutBar } from 'components/Charts';

export const ChartsContent: React.FC = () => {
    return (
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
    );
};
