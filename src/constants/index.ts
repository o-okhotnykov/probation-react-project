import { ToastOptions } from 'react-toastify';

export const BASE_URL = 'http://localhost:3010/';

export const ROUTE_PATH = {
    main: '/',
    login: '/login',
    register: '/register',
};

export const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

export const TOAST_CONFIG: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
