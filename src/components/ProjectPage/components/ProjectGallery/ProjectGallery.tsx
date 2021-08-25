import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './style';

interface GalleryProps {
    projectAssets?: string[];
}

export const ProjectGallery: React.FC<GalleryProps> = ({ projectAssets }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.galleryContainer}>
            {projectAssets?.length === 0 || projectAssets === undefined ? (
                <Typography variant="h2">This project has no images</Typography>
            ) : (
                <>
                    {projectAssets?.map((item) => (
                        <Grid item xs={3} key={item} className={classes.media}>
                            <img src={item} alt="gallery item" className={classes.mediaContent} />
                        </Grid>
                    ))}
                </>
            )}
        </Grid>
    );
};
