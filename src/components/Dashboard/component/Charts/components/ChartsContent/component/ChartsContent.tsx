import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Loading } from 'components/Loading';
import { getProjectsAsync } from 'store/project-slice';
import { VerticalBar } from '../../VerticalBar';
import { LineBar } from '../../LineBar';
import { DoughnutBar } from '../../Doughnut';

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
