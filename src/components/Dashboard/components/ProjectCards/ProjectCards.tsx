import { Box } from '@material-ui/core';
import project1Logo from 'assets/project1-logo.png';
import project2Logo from 'assets/project2-logo.png';
import project3Logo from 'assets/project3-logo.png';
import { ProjectCard } from '../ProjectCard';

export const ProjectCards: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box padding="0 25px">
                <ProjectCard
                    img={project1Logo}
                    bgColor="success.light"
                    color="success.main"
                    completionValue={67}
                />
            </Box>
            <Box padding="0 25px">
                <ProjectCard
                    img={project2Logo}
                    bgColor="warning.light"
                    color="warning.main"
                    completionValue={32}
                />
            </Box>
            <Box padding="0 25px">
                <ProjectCard
                    img={project3Logo}
                    bgColor="info.light"
                    color="info.main"
                    completionValue={67}
                />
            </Box>
        </Box>
    );
};
