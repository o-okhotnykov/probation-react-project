import { makeStyles } from '@material-ui/core/styles';

const memberStatus = {
    padding: '10px',
    borderRadius: '5px',
};

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '30px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImg: {
        width: 100,
        height: 100,
        marginBottom: 25,
        borderRadius: '50%',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 5% ',
    },
    userInfoText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
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
