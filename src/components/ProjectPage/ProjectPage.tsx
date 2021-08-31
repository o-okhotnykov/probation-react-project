import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { currentProjectSelector, getProjectByIdAsync } from 'store/project-slice';
import { Loading } from 'components/Loading';
import { ModalComponent } from 'components/ModalComponent';
import { RetireModal } from './components/RetireModal';
import { ProjectGallery } from './components/ProjectGallery';
import { useStyles } from './style';

export const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const currentProject = useSelector(currentProjectSelector);
    const [projectId, setProjectId] = useState<number>(0);

    useEffect(() => {
        setProjectId(Number(id));
        dispatch(getProjectByIdAsync(projectId));
    }, [dispatch, id, projectId]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Box padding="30px 10px" display="flex" flexDirection="column" alignItems="center">
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
                                <Paper className={classes[currentProject.stats]}>
                                    {currentProject.stats}
                                </Paper>
                                <Box
                                    display="flex"
                                    width="100%"
                                    justifyContent="space-around"
                                    alignSelf="center"
                                    padding="10px 0"
                                >
                                    <Button variant="outlined" color="primary">
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={toggleModal}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <ProjectGallery projectId={projectId} />
                    </>
                )}
            </Loading>
            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <RetireModal projectId={projectId} handleCloseModal={toggleModal} />
                </ModalComponent>
            )}
        </Box>
    );
};
