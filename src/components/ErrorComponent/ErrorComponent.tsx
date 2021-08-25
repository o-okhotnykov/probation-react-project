import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const ErrorComponent: React.FC = () => {
    const classes = useStyles();

    return <Box className={classes.errorContent}>404</Box>;
};
