import { makeStyles } from '@material-ui/core/styles';

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
        color: '#8f9198',
    },
    btn: {
        padding: 0,
        margin: '15px 0',
        fontWeight: 900,
        color: '#ec4e6e',
    },
}));
