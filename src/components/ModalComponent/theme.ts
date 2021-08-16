import { createTheme } from '@material-ui/core';
import { ACCENT_PRIMARY } from 'constants/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',

        h6: {
            color: ACCENT_PRIMARY,
            fontWeight: 900,
        },
        body1: {
            fontWeight: 900,
            color: ACCENT_PRIMARY,
        },
    },
});
