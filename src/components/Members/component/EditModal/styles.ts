import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_LIGHT, ACCENT_PRIMARY } from 'constants/colors';

export const useStyles = makeStyles({
    btn: {
        fontWeight: 900,
        border: '1px solid #d5e3d6',
    },
    btnCancel: {
        backgroundColor: '#fff',
        color: ACCENT_PRIMARY,
    },
    btnConfirm: {
        backgroundColor: '#ec4e6e',
        color: DEFAULT_LIGHT,
    },
    action: {
        alignItems: 'center',
        justifyContent: 'space-between',
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
});
