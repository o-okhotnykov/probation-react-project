/* eslint-disable import/prefer-default-export */
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { SideSection } from '../SideSection/SideSection';
import { Navigation } from '../Navigation/Navigation';

export const Main: React.FC = () => {
    return (
        <>
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
