import { Box, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

export interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>{children}</Box>
        </ThemeProvider>
    );
};
