import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'components/theme';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
};
