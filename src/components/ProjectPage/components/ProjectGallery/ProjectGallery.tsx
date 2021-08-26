import { Grid, Typography } from '@material-ui/core';
import { ModalComponent } from 'components/ModalComponent';
import { useState } from 'react';
import { GallerySlider } from '../GallerySlider';
import { useStyles } from './style';

interface GalleryProps {
    projectAssets?: string[];
}

export const ProjectGallery: React.FC<GalleryProps> = ({ projectAssets }) => {
    const classes = useStyles();
    const [isOpen, setIsSOpen] = useState(false);

    const toggleModal = () => {
        setIsSOpen(!isOpen);
    };

    return (
        <>
            <Grid container className={classes.galleryContainer}>
                {projectAssets?.length === 0 || projectAssets === undefined ? (
                    <Typography variant="h2">This project has no images</Typography>
                ) : (
                    <>
                        {projectAssets?.map((item) => (
                            <Grid
                                item
                                xs={3}
                                key={item}
                                className={classes.media}
                                onClick={toggleModal}
                            >
                                <img
                                    src={item}
                                    alt="gallery item"
                                    className={classes.mediaContent}
                                />
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <GallerySlider projectAssets={projectAssets} />
                </ModalComponent>
            )}
        </>
    );
};
