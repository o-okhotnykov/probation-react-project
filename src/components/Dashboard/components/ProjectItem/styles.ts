import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

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
        padding: '25px 25px',
    },
    titleProject: {
        paddingLeft: 25,
    },
    stateContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    progress: {
        textAlign: 'center',
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        textTransform: 'uppercase',
        ...stats,
    },
    open: {
        textAlign: 'center',
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        textTransform: 'uppercase',
        ...stats,
    },
    done: {
        textAlign: 'center',
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.light,
        textTransform: 'uppercase',
        ...stats,
    },
}));
