import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { getProjectsAsync } from 'store/project-store';
import { VerticalBar, LineBar, DoughnutBar } from 'components/Charts';

export const ChartsContent: React.FC = () => {
    const loading = useSelector(isRequestPendingSelector(getProjectsAsync.typePrefix));

    if (loading) {
        return <Loading />;
    }
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
