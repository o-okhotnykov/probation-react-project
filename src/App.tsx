import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'components/theme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Routes } from 'routes/Routes';
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <CssBaseline />
                <ToastContainer />
                <Router>
                    <Routes />
                </Router>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};
