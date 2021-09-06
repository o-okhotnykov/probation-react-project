import { Box, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { userDataSelector } from 'store/user-slice';
import { ActionMenu } from './components/ActionMenu';
import { useStyles } from './style';

export const SettingsPage: React.FC = () => {
    const user = useSelector(userDataSelector);
    const classes = useStyles();

    return (
        <>
            {user && (
                <Box className={classes.container}>
                    <Box className={classes.userInfo}>
                        <img src={user.img} alt="user-img" className={classes.userImg} />
                        <Paper className={classes[user.role]}>{user.role}</Paper>
                    </Box>
                    <Box className={classes.userInfoText}>
                        <Box display="flex">
                            <Box display="flex" flexDirection="column" alignItems="flex-start">
                                <Typography variant="h3">Name:</Typography>
                                <Typography variant="h3">Surname:</Typography>
                                <Typography variant="h3">Email:</Typography>
                                <Typography variant="h3">Birth Day:</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h3">{user.name}</Typography>
                                <Typography variant="h3">{user.surname}</Typography>
                                <Typography variant="h3">{user.email}</Typography>
                                <Typography variant="h3">{user.birthDate}</Typography>
                            </Box>
                        </Box>
                        <ActionMenu user={user} />
                    </Box>
                </Box>
            )}
        </>
    );
};
