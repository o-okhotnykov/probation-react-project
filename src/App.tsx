import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { theme } from 'components/theme';
import { FormatDateProvider } from 'context/FormatDateProvider';
import { DateFormat } from 'constants/formatDateProvider';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormatDateProvider local={DateFormat.default}>
                    <CssBaseline />
                    <ToastContainer />
                    <Router>
                        <Routes />
                    </Router>
                </FormatDateProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
};
