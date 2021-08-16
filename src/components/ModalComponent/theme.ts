import { createTheme } from '@material-ui/core';
import { ACCENT_PRIMARY } from 'constants/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h6: {
            fontWeight: 900,
            color: ACCENT_PRIMARY,
        },
        body1: {
            fontWeight: 900,
            color: ACCENT_PRIMARY,
        },
    },
});
