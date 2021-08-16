import { ThemeProvider, createTheme, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { isAuthorizedSelector } from 'store/user-slice';
import { Navigation } from './Navigation';
import { SideSection } from './SideSection';

export interface ILayoutProps {
    children: React.ReactNode;
}
const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const isAuthorized = useSelector(isAuthorizedSelector);

    if (!isAuthorized) {
        return (
            <div className="main-container">
                <div className="wrapper">{children}</div>
            </div>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
                    <Router>
                        <Navigation />

                        <div className="main-container">
                            <div className="wrapper">{children}</div>
                        </div>
                    </Router>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
