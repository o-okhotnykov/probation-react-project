import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addProject: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        padding: '30px 0',
    },
    btn: {
        margin: '10px 0px',
        padding: 0,
    },
    icon: {
        fontSize: 30,
    },
}));
