import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from 'routes/Routes';

export const App: React.FC = () => {
    return (
        <div className="App">
            <ToastContainer />
            <Router>
                <Routes />
            </Router>
        </div>
    );
};
