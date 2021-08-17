import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addProject: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '20%',
    },

    icon: {
        fontSize: 30,
    },
    btn: {
        padding: 0,
        margin: '15px 0',
        fontWeight: 900,
        color: '#ec4e6e',
    },
}));
