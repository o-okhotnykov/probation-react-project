import { Box } from '@material-ui/core';
import { ChartsContent } from './components/ChartsContent';
import { ProjectCards } from './components/ProjectCards';

import { ProjectList } from './components/ProjectList';

export const DashboardMain: React.FC = () => {
    return (
        <Box padding="25px 25px">
            <ProjectCards />
            <ProjectList />
            <ChartsContent />
        </Box>
    );
};
