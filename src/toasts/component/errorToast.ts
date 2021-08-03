import { toast } from 'react-toastify';
import { TOAST_CONFIG } from 'constants/index';

export const errorToastNotify = (message: string) => toast.error(message, TOAST_CONFIG);
