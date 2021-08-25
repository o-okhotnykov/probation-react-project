import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
}));
