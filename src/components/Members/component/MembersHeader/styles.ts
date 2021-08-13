import { makeStyles } from '@material-ui/core/styles';
import { ACCENT_PRIMARY, DARK_GREY } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    header: { fontWeight: 900 },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addProject: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    subTitle: {
        color: DARK_GREY,
    },
    btn: {
        padding: 0,
        margin: '15px 0',
        fontWeight: 900,
        color: ACCENT_PRIMARY,
    },
}));
