import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ModalComponent } from 'components/ModalComponent';
import { isAdminSelector, userSelector } from 'store/user-slice';
import { RetireModal } from './components/RetireModal';
import { ProjectGallery } from './components/ProjectGallery';
import { useStyles } from './style';
import { getCurrentProject, GetProjectResponse } from './api';
import { Project } from 'types/api/project';

export const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [projectState, setProjectState] = useState<Project>();

    const { data } = useQuery<GetProjectResponse, { id: string }>(getCurrentProject, {
        variables: {
            id,
        },
    });

    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    const currentUser = useSelector(userSelector);
    const isAdmin = useSelector(isAdminSelector);
    const [projectId, setProjectId] = useState<number>(0);

    useEffect(() => {
        setProjectId(Number(id));

        if (data?.Project) {
            setProjectState(data.Project);
        }
    }, [data]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box padding="30px 10px" display="flex" flexDirection="column" alignItems="center">
            {projectState && (
                <>
                    <Grid container justifyContent="center">
                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                image={projectState.img}
                                className={classes.projectLogo}
                            />
                        </Grid>
                        <Grid item xs={4} className={classes.textInfo}>
                            <Typography variant="h2" title="Title" className={classes.info}>
                                {projectState.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                title="Reporter"
                                className={classes.info}
                            >
                                {projectState.reporter}
                            </Typography>
                            <Typography variant="body1" className={classes.info}>
                                Date Create: {projectState.dateCreate}
                            </Typography>
                            <Typography variant="body1" className={classes.info}>
                                Date Due: {projectState.dateDue}
                            </Typography>
                            <Paper className={classes[projectState.stats]}>
                                {projectState.stats}
                            </Paper>
                            {(projectState.reporterId === currentUser.userData?.id || isAdmin) && (
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
                            )}
                        </Grid>
                    </Grid>
                    <ProjectGallery projectId={projectId} />
                </>
            )}
            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <RetireModal projectId={projectId} handleCloseModal={toggleModal} />
                </ModalComponent>
            )}
        </Box>
    );
};
