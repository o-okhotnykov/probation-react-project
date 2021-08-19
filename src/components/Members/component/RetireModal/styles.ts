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
});
