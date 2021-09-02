import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@material-ui/core';
import { ProjectAssets } from 'types/api/project';
import { settings } from './settings';
import { useStyles } from './style';

interface GallerySliderProps {
    projectAssets: ProjectAssets[];
    index: number;
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ projectAssets, index }) => {
    const classes = useStyles();

    return (
        <Box className={classes.slideWrapper}>
            <Slider {...settings} className={classes.slider} initialSlide={index}>
                {projectAssets.map(({ id, url }) => (
                    <Box key={id} className={classes.media}>
                        <img alt="slider" className={classes.mediaContent} src={url} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
