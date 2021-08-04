import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    header: { fontWeight: 900 },
    container: {
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
        fontWeight: 900,
        color: '#ec4e6e',
    },
}));
