import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { App } from './App';
import { store } from './store/root-store';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { errorLink, httpLink } from 'apolloLinks';

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});

const persistor = persistStore(store);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'),
);
