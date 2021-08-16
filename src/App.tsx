import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from 'routes/Routes';

export const App: React.FC = () => {
    return (
        <div className="App">
            <ToastContainer />
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </div>
    );
};
