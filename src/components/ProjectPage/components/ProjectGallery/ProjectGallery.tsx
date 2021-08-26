/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from '@material-ui/core';
import { ModalComponent } from 'components/ModalComponent';
import { LIMIT, PAGE } from 'constants/index';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { currentProjectAssetsSelector, getProjectAssetsAsync } from 'store/project-slice';
import { GallerySlider } from '../GallerySlider';
import { useStyles } from './style';

interface GalleryProps {
    projectId: number;
}

export const ProjectGallery: React.FC<GalleryProps> = ({ projectId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const projectAssets = useSelector(currentProjectAssetsSelector);
    const [isOpen, setIsSOpen] = useState(false);

    useEffect(() => {
        dispatch(getProjectAssetsAsync({ id: projectId, page: PAGE, limit: LIMIT }));
    }, [dispatch, projectId]);

    const toggleModal = () => {
        setIsSOpen(!isOpen);
    };

    return (
        <>
            {projectAssets?.length === 0 || projectAssets === undefined ? (
                <Typography variant="h2">This project has no images</Typography>
            ) : (
                <Box width="100%">
                    <InfiniteScroll
                        className={classes.infinityScroll}
                        dataLength={13}
                        next={() =>
                            dispatch(
                                getProjectAssetsAsync({ id: projectId, page: PAGE, limit: 14 }),
                            )
                        }
                        hasMore
                        loader={
                            <img
                                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                alt="loading"
                            />
                        }
                    >
                        <Grid container className={classes.galleryContainer}>
                            {projectAssets?.map(({ id, url }) => (
                                <Grid
                                    item
                                    xs={3}
                                    key={id}
                                    className={classes.media}
                                    onClick={toggleModal}
                                >
                                    <img
                                        src={url}
                                        alt="gallery item"
                                        className={classes.mediaContent}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </InfiniteScroll>
                </Box>
            )}

            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <GallerySlider projectAssets={projectAssets} />
                </ModalComponent>
            )}
        </>
    );
};
