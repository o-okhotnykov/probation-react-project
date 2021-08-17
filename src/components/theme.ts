/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import {
    DARK_GREY,
    DEFAULT_LIGHT,
    ERROR_LIGHT,
    ERROR_MAIN,
    INFO_LIGHT,
    INFO_MAIN,
    PRIMARY_LIGHT,
    PRIMARY_MAIN,
    SECONDARY_LIGHT,
    SECONDARY_MAIN,
    SUCCESS_LIGHT,
    SUCCESS_MAIN,
    WARNING_LIGHT,
    WARNING_MAIN,
} from 'constants/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h2: {
            fontWeight: 900,
            fontSize: '2em',
            color: '#000000',
        },
        subtitle1: {
            fontWeight: 900,
            fontSize: '1em',
            color: '#8f9198',
        },
    },
    palette: {
        primary: {
            main: PRIMARY_MAIN,
            light: PRIMARY_LIGHT,
            dark: PRIMARY_LIGHT,
            contrastText: DEFAULT_LIGHT,
        },
        secondary: {
            main: DEFAULT_LIGHT,
            light: SECONDARY_LIGHT,
            dark: DARK_GREY,
            contrastText: PRIMARY_MAIN,
        },
        warning: {
            main: WARNING_MAIN,
            light: WARNING_LIGHT,
        },
        info: {
            main: INFO_MAIN,
            light: INFO_LIGHT,
        },
        error: {
            main: ERROR_MAIN,
            light: ERROR_LIGHT,
        },
        success: {
            main: SUCCESS_MAIN,
            light: SUCCESS_LIGHT,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                fontFamily: 'Poppins,sans-serif',
                color: '#000',
                fontWeight: 900,
            },
        },
    },
});
