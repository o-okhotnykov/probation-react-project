import { Box } from '@material-ui/core';
import { ChartsContent } from './components/ChartsContent';
import { AddProject } from './components/AddProject';
import { ProjectList } from './components/ProjectList';

export const DashboardMain: React.FC = () => {
    return (
        <Box padding="25px 25px">
            <AddProject />
            <ProjectList />
            <ChartsContent />
        </Box>
    );
};
