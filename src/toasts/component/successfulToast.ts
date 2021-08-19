import { toast } from 'react-toastify';
import { TOAST_CONFIG } from 'constants/index';
import { ReactText } from 'react';

export const successfulToastNotify = (message: string): ReactText =>
    toast.success(message, TOAST_CONFIG);
