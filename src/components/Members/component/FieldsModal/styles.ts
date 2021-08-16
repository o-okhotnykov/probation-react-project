import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_LIGHT, ACCENT_PRIMARY, ACCENT_LIGHT_TRANSPARENT } from 'constants/colors';

export const useStyles = makeStyles({
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
    btnUpload: {
        margin: '11% 0',
    },
    btnConfirm: {
        backgroundColor: '#ec4e6e',
        color: DEFAULT_LIGHT,
    },
    action: {
        paddingTop: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    formPart: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    userImg: {
        width: 100,
        height: 100,
        marginBottom: 25,
        borderRadius: '50%',
    },
});
