import { onError } from '@apollo/client/link/error';
import { errorToastNotify } from 'toasts';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) graphQLErrors.forEach(({ message }) => errorToastNotify(message));
    if (networkError) errorToastNotify(`${networkError}`);
});
