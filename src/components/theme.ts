import { createTheme } from '@material-ui/core';

const WARNING_MAIN = '#885a40';
const WARNING_LIGHT = '#f2bc9e';

const INFO_MAIN = '#3a7295';
const INFO_LIGHT = '#92c7e8';

const ERROR_MAIN = '#f44336';
const ERROR_LIGHT = '#e57373';

const SUCCESS_MAIN = '#4a7745';
const SUCCESS_LIGHT = '#cee8ca';

const PRIMARY_MAIN = '#ec4e6e';
const PRIMARY_LIGHT = '#ec4f6ecc';

const SECONDARY_LIGHT = '#8f9198';

const DEFAULT_LIGHT = '#fff';
const DARK_GREY = '#484848';
const DARK_DEFAULT = '#000';

export const LIGHT_GREY = '#8f9198';
export const BORDER_DEFAULT = '#d5e3d6';
export const ACCENT_LIGHT_TRANSPARENT = '#e5e5e5';

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontWeight: 500,
            fontSize: '2em',
            color: DARK_DEFAULT,
        },
        h2: {
            fontWeight: 500,
            fontSize: '1.5em',
            color: DARK_GREY,
            textAlign: 'center',
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.1em',
            color: DARK_GREY,
            textAlign: 'center',
        },
        h6: {
            fontWeight: 900,
            fontSize: '1.2em',
            textTransform: 'uppercase',
            color: PRIMARY_MAIN,
        },
        body1: {
            color: '#000',
            fontWeight: 400,
            textTransform: 'capitalize',
            fontSize: '1em',
            textAlign: 'center',
        },
        body2: {
            fontWeight: 900,
            fontSize: '1em',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1em',
            color: '#8f9198',
        },
        caption: {
            fontWeight: 500,
            fontSize: '.8em',
            color: '#8f9198',
        },
    },
    palette: {
        background: {
            default: DEFAULT_LIGHT,
        },
        primary: {
            main: PRIMARY_MAIN,
            light: PRIMARY_LIGHT,
            dark: DEFAULT_LIGHT,
            contrastText: DEFAULT_LIGHT,
        },
        secondary: {
            main: DEFAULT_LIGHT,
            light: SECONDARY_LIGHT,
            dark: PRIMARY_LIGHT,
            contrastText: PRIMARY_MAIN,
        },
        warning: {
            main: WARNING_MAIN,
            light: WARNING_LIGHT,
            dark: BORDER_DEFAULT,
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
                padding: '5px 35px',
            },
            containedSecondary: {
                '&:hover': {
                    color: DEFAULT_LIGHT,
                },
            },
            containedPrimary: {
                '&:hover': {
                    color: PRIMARY_LIGHT,
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                fontWeight: 900,
                color: LIGHT_GREY,
            },
        },
    },
});
