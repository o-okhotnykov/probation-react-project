import { makeStyles } from '@material-ui/core/styles';

const memberStatus = {
    padding: '10px',
    borderRadius: '5px',
    'text-transform': 'uppercase',
};

export const useStyles = makeStyles((theme) => ({
    projectLogo: {
        width: '60%',
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        padding: '10px 0',
    },
    open: {
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        ...memberStatus,
    },
    done: {
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.light,
        ...memberStatus,
    },
    progress: {
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        ...memberStatus,
    },
}));
