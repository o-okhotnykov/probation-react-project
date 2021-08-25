import { makeStyles } from '@material-ui/core/styles';

const memberStatus = {
    padding: '10px',
    borderRadius: '5px',
};

export const useStyles = makeStyles((theme) => ({
    register: {
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    expired: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    progress: {
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
}));
