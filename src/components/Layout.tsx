import { ThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';

export interface ILayoutProps {
    children: React.ReactNode;
}
const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">{children}</div>
        </ThemeProvider>
    );
};
