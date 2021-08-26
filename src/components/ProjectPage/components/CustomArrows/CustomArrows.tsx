import { Box } from '@material-ui/core';
import React, { MouseEventHandler } from 'react';
import nextArrow from 'assets/next.png';
import previousArrow from 'assets/previous.png';
import { useStyles } from './style';

interface ArrowsProps {
    onClick?: MouseEventHandler<HTMLElement>;
}

export const SampleNextArrow: React.FC<ArrowsProps> = (props) => {
    const { onClick } = props;
    const classes = useStyles();
    return (
        <Box onClick={onClick} className={classes.nextArrow}>
            <img alt="next" src={nextArrow} />
        </Box>
    );
};

export const SamplePrevArrow: React.FC<ArrowsProps> = (props) => {
    const { onClick } = props;
    const classes = useStyles();
    return (
        <Box onClick={onClick} className={classes.prevArrow}>
            <img alt="next" src={previousArrow} />
        </Box>
    );
};
