import React, { ComponentType } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Queries, render as rtlRender, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { reducers, RootState } from 'store/root-store';
import { loadingHandler } from 'store/middleware';
import { FormatDateProvider } from 'context/FormatDateProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { DateFormat } from 'constants/formatDateProvider';

export const history = createMemoryHistory();

interface RenderResultInterface {
    component: RenderResult<Queries, HTMLElement>;
    history: MemoryHistory<unknown>;
}

export const render = (
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: reducers,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: false,
                }).concat(loadingHandler),
            preloadedState,
        }),
        ...renderOptions
    }: { preloadedState?: RootState; store?: any } = {},
): RenderResultInterface => {
    const Wrapper: ComponentType = ({ children }) => {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormatDateProvider local={DateFormat.default}>
                    <Router history={history}>
                        <Provider store={store}>{children}</Provider>
                    </Router>
                </FormatDateProvider>
            </LocalizationProvider>
        );
    };
    return { component: rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), history };
};
