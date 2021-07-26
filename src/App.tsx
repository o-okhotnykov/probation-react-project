import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SideSection } from './components/SideSection/SideSection';
import { Main } from './components/Main';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Main />
                </Grid>
            </Grid>
        </div>
    );
};
