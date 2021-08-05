import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid/Grid';
import { SideSection } from 'components/SideSection';
import { Navigation } from 'components/Navigation';
import { loadingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { DashboardMain } from 'components/Dashboard';

export const Main: React.FC = () => {
    const loading = useSelector(loadingSelector);
    return (
        <>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                {loading ? <Loading /> : null}
                <Grid item xs={11} className="main-section">
                    <Navigation />
                    <DashboardMain />
                </Grid>
            </Grid>
        </>
    );
};
