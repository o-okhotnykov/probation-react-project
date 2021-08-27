import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@material-ui/core';
import { ProjectAssets } from 'types/api/project';
import { SampleNextArrow, SamplePrevArrow } from '../CustomArrows';
import { useStyles } from './style';

interface GallerySliderProps {
    projectAssets: ProjectAssets[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ projectAssets }) => {
    const classes = useStyles();

    const settings = {
        dots: false,
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
                {projectAssets?.map(({ id, url }) => (
                    <Box key={id} className={classes.media}>
                        <img alt="slider" className={classes.mediaContent} src={url} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
