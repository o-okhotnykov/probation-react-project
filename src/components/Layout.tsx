import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './Navigation';
import { SideSection } from './SideSection';

export interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Router>
                        <Navigation />
                        <div className="wrapper">{children}</div>
                    </Router>
                </Grid>
            </Grid>
        </>
    );
};
