import { Box, Grid, Typography } from '@material-ui/core';
import { ModalComponent } from 'components/ModalComponent';
import { LIMIT, PAGE } from 'constants/index';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import {
    currentProjectAssetsSelector,
    getProjectAssetsAsync,
    totalAssetsSelector,
} from 'store/project-slice';
import { GallerySlider } from '../GallerySlider';
import { useStyles } from './style';

interface GalleryProps {
    projectId: number;
}

export const ProjectGallery: React.FC<GalleryProps> = ({ projectId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const projectAssets = useSelector(currentProjectAssetsSelector);
    const totalAssets = useSelector(totalAssetsSelector);
    const [isOpen, setIsSOpen] = useState(false);
    const [count, setCount] = useState(2);

    useEffect(() => {
        dispatch(getProjectAssetsAsync({ id: projectId, page: PAGE, limit: LIMIT }));
    }, [dispatch, projectId]);

    const toggleModal = () => {
        setIsSOpen(!isOpen);
    };

    const handleNext = () => {
        setCount((prevState) => prevState + 1);
        dispatch(
            getProjectAssetsAsync({
                id: projectId,
                page: PAGE,
                limit: LIMIT * count,
            }),
        );
    };

    return (
        <>
            {projectAssets?.length === 0 || projectAssets === undefined ? (
                <Typography variant="h2">This project has no images</Typography>
            ) : (
                <Box width="100%">
                    <InfiniteScroll
                        className={classes.infinityScroll}
                        dataLength={totalAssets}
                        next={handleNext}
                        hasMore={totalAssets > projectAssets.length}
                        loader={
                            <img
                                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                alt="loading"
                            />
                        }
                        endMessage={
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/796px-Thats_all_folks.svg.png"
                                alt="all"
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
