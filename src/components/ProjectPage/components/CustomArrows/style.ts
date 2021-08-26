import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    nextArrow: {
        right: 0,
        display: 'block',
        position: 'absolute',
        top: '45%',
        zIndex: 999,
        cursor: 'pointer',
    },
    prevArrow: {
        display: 'block',
        position: 'absolute',
        left: 0,
        top: '45%',
        zIndex: 999,
        cursor: 'pointer',
    },
}));
