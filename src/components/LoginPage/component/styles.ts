import { makeStyles } from '@material-ui/core/styles';
import { ACCENT_LIGHT_TRANSPARENT, ACCENT_PRIMARY, DEFAULT_LIGHT } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    card: {
        boxShadow: 'none',
    },
    media: {
        margin: '10px auto',
        height: '15vh',
        width: '15vh',
    },
    text: {
        padding: '15px 0px',
    },
    link: {
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    btn: {
        color: DEFAULT_LIGHT,
        backgroundColor: ACCENT_PRIMARY,
        padding: '5px 25px',
        fontWeight: 900,
        '&:hover': {
            backgroundColor: ACCENT_LIGHT_TRANSPARENT,
        },
        '&:disabled': {
            backgroundColor: ACCENT_LIGHT_TRANSPARENT,
        },
    },
}));
