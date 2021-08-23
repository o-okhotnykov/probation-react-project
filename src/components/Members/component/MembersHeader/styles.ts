import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addProject: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
}));
