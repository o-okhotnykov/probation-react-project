import { toast } from 'react-toastify';
import { TOAST_CONFIG } from 'constants/index';

export const successfulToastNotify = (message: string) => toast.success(message, TOAST_CONFIG);
