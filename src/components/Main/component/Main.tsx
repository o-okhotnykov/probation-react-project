import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid/Grid';
import { SideSection } from 'components/SideSection';
import { Navigation } from 'components/Navigation';
import { loadingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';

import './Main.scss';

export const Main: React.FC = () => {
    const loading = useSelector(loadingSelector);
    return (
        <>
            {loading ? <Loading /> : null}
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Navigation />
                    <div>H1</div>
                </Grid>
            </Grid>
        </>
    );
};
