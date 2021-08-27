import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@material-ui/core';
import { settings } from './settings';
import { useStyles } from './style';

interface GallerySliderProps {
    projectAssets?: string[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ projectAssets }) => {
    const classes = useStyles();

    return (
        <Box className={classes.slideWrapper}>
            <Slider {...settings} className={classes.slider}>
                {projectAssets?.map((item) => (
                    <Box key={item} className={classes.media}>
                        <img alt="slider" className={classes.mediaContent} src={item} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
