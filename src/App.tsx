import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Routes } from 'routes/Routes';
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
    return (
        <Box>
            <ToastContainer />
            <Router>
                <Routes />
            </Router>
        </Box>
    );
};
