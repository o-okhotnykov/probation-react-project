import { Box, Button, CardMedia, Grid, Typography } from '@material-ui/core';
import { Loading } from 'components/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { currentProjectSelector, getProjectByIdAsync } from 'store/project-slice';
import { useStyles } from './style';

export const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getProjectByIdAsync(Number(id)));
    }, [dispatch, id]);

    const currentProject = useSelector(currentProjectSelector);

    return (
        <Box padding="30px 10px">
            <Loading apiCall={getProjectByIdAsync}>
                {currentProject && (
                    <>
                        <Grid container justifyContent="center">
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    image={currentProject.img}
                                    className={classes.projectLogo}
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.textInfo}>
                                <Typography variant="h2" title="Title" className={classes.info}>
                                    {currentProject.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    title="Reporter"
                                    className={classes.info}
                                >
                                    {currentProject.reporter}
                                </Typography>
                                <Typography variant="body1" className={classes.info}>
                                    Date Create: {currentProject.dateCreate}
                                </Typography>
                                <Typography variant="body1" className={classes.info}>
                                    Date Due: {currentProject.dateDue}
                                </Typography>
                                <Box
                                    display="flex"
                                    width="100%"
                                    justifyContent="space-around"
                                    alignSelf="center"
                                >
                                    <Button variant="outlined" color="primary">
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="primary">
                                        Delete
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.galleryContainer}>
                            {currentProject.projectAssets?.map((item) => (
                                <Grid item xs={3} key={item} className={classes.media}>
                                    <img
                                        src={item}
                                        alt="gallery item"
                                        className={classes.mediaContent}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Loading>
        </Box>
    );
};
