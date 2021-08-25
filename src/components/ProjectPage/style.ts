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
    imageList: { width: '100%' },
    image: { width: '100%', maxWidth: 450, height: 450 },
    galleryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}));
