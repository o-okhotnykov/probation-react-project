import logo from 'assets/logo.png';
import { Box, CardMedia } from '@material-ui/core';
import { useStyles } from './styles';

export const SideSection: React.FC = () => {
    const classes = useStyles();
    return (
        <Box>
            <CardMedia image={logo} className={classes.logo} title="logo" />
        </Box>
    );
};
