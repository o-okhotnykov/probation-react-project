import { toast } from 'react-toastify';
import { TOAST_CONFIG } from 'constants/index';
import { ReactText } from 'react';

export const errorToastNotify = (message: string): ReactText => toast.error(message, TOAST_CONFIG);
