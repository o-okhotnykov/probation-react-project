import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@material-ui/core';
import { ModalComponent } from 'components/ModalComponent';
import { LIMIT, PAGE } from 'constants/index';
import {
    clearAssets,
    currentProjectAssetsSelector,
    getProjectAssetsAsync,
    totalAssetsSelector,
} from 'store/project-slice';
import { Loading } from 'components/Loading';
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
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(clearAssets());
        dispatch(getProjectAssetsAsync({ id: projectId, page: PAGE, limit: LIMIT }));
    }, [dispatch, projectId]);

    const toggleModal = () => {
        setIsSOpen(!isOpen);
    };

    const handleNext = () => {
        dispatch(
            getProjectAssetsAsync({
                id: projectId,
                page: count + 1,
                limit: LIMIT,
            }),
        );
        setCount((prevState) => prevState + 1);
    };

    return (
        <>
            <Loading apiCall={getProjectAssetsAsync} hideLoader={projectAssets.length > 0}>
                <Box width="100%">
                    <InfiniteScroll
                        className={classes.infinityScroll}
                        dataLength={projectAssets.length}
                        next={handleNext}
                        hasMore={totalAssets > projectAssets.length}
                        loader={<Typography variant="h2">Loading..</Typography>}
                        endMessage={<Typography variant="h2">No more pictures</Typography>}
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

                {isOpen && (
                    <ModalComponent open={isOpen} close={toggleModal}>
                        <GallerySlider projectAssets={projectAssets} />
                    </ModalComponent>
                )}
            </Loading>
        </>
    );
};
