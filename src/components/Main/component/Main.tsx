import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { SideSection } from 'components/SideSection';
import { Navigation } from 'components/Navigation';
import './Main.scss';
import { TableComponent } from 'components/TableComponent';

export const Main: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Navigation />
                    <TableComponent />
                </Grid>
            </Grid>
        </>
    );
};
