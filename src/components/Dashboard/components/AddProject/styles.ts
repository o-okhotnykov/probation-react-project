import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 0',
    },
    addProject: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    btn: {
        padding: 0,
    },
    icon: {
        fontSize: 30,
    },
}));
