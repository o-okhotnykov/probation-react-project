import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import { DEFAULT_LIGHT, ACCENT_PRIMARY } from 'constants/colors';

export const useStyles = makeStyles({
    btn: {
        fontWeight: 900,
        border: '1px solid #d5e3d6',
    },
    btnCancel: {
        backgroundColor: '#fff',
        color: ACCENT_PRIMARY,
=======
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
>>>>>>> 0424978a603a8996e0f64851643009b951099305
    },
    btnConfirm: {
        backgroundColor: '#ec4e6e',
        color: DEFAULT_LIGHT,
    },
    action: {
<<<<<<< HEAD
        alignItems: 'center',
        justifyContent: 'space-between',
=======
        paddingTop: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
>>>>>>> 0424978a603a8996e0f64851643009b951099305
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
