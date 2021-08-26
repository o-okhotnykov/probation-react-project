import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@material-ui/core';
import nextArrow from 'assets/next.png';
import previousArrow from 'assets/previous.png';
import { useStyles } from './style';

interface GallerySliderProps {
    projectAssets?: string[];
}

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            onClick={onClick}
            style={{
                display: 'block',
                position: 'absolute',
                right: 0,
                top: '45%',
                zIndex: 999,
                cursor: 'pointer',
            }}
        >
            <img alt="next" src={nextArrow} />
        </Box>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <Box
            onClick={onClick}
            style={{
                display: 'block',
                position: 'absolute',
                left: 0,
                top: '45%',
                zIndex: 999,
                cursor: 'pointer',
            }}
        >
            <img alt="next" src={previousArrow} />
        </Box>
    );
}
export const GallerySlider: React.FC<GallerySliderProps> = ({ projectAssets }) => {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={classes.nextArrow} />,
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
