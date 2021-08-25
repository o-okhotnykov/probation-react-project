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
    media: { width: '100%', height: 0, paddingBottom: '30%', position: 'relative' },
    mediaContent: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        padding: 10,
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    galleryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}));
