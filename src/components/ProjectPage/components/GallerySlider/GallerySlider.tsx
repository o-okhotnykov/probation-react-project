import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@material-ui/core';
import { SampleNextArrow, SamplePrevArrow } from '../CustomArrows';
import { useStyles } from './style';

interface GallerySliderProps {
    projectAssets?: string[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ projectAssets }) => {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

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
