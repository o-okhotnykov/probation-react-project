import { makeStyles } from '@material-ui/core/styles';

const memberStatus = {
    padding: '10px',
    borderRadius: '5px',
};

export const useStyles = makeStyles((theme) => ({
    default: {
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    admin: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
    contributor: {
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        textTransform: 'uppercase',
        ...memberStatus,
    },
}));
