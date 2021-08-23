import { Box } from '@material-ui/core';
import { MembersHeader } from './component/MembersHeader';
import { MembersList } from './component/MembersList';

export const MembersMain: React.FC = () => {
    return (
        <Box padding="30px">
            <MembersHeader />
            <MembersList />
        </Box>
    );
};
