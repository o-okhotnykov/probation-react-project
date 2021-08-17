import { makeStyles } from '@material-ui/core/styles';
import {
    BORDER_DEFAULT,
    INFO_LIGHT,
    INFO_MAIN,
    SUCCESS_LIGHT,
    SUCCESS_MAIN,
    WARNING_LIGHT,
    WARNING_MAIN,
} from 'constants/colors';

const stats = {
    width: '50%',
    padding: '8px',
};

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: `solid 0.5px ${BORDER_DEFAULT}`,
        borderRadius: '10px',
        padding: '0 15px',
        margin: '10px 0',
        textAlign: 'left',
    },
    logoContainer: {
        padding: '0 15px',
        height: 35,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    progress: {
        textAlign: 'center',
        color: WARNING_MAIN,
        backgroundColor: WARNING_LIGHT,
        textTransform: 'uppercase',
        ...stats,
    },
    open: {
        textAlign: 'center',
        color: INFO_MAIN,
        backgroundColor: INFO_LIGHT,
        textTransform: 'uppercase',
        ...stats,
    },
    done: {
        textAlign: 'center',
        color: SUCCESS_MAIN,
        backgroundColor: SUCCESS_LIGHT,
        textTransform: 'uppercase',
        ...stats,
    },
}));
