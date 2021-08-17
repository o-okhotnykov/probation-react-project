import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { isRequestPendingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { getProjectsAsync } from 'store/project-slice';
import { VerticalBar, LineBar, DoughnutBar } from 'components/Charts';
import { useStyles } from './styles';

export const ChartsContent: React.FC = () => {
    const loading = useSelector(isRequestPendingSelector(getProjectsAsync.typePrefix));
    const classes = useStyles();

    if (loading) {
        return <Loading />;
    }

    return (
        <Grid container className={classes.chartContainer} spacing={1}>
            <Grid item xs={4}>
                <VerticalBar />
            </Grid>
            <Grid item xs={3}>
                <LineBar />
            </Grid>
            <Grid item xs={4}>
                <DoughnutBar />
            </Grid>
        </Grid>
    );
};
