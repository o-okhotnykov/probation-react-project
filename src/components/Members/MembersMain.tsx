import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import { MembersHeader } from './component/MembersHeader';
import { MembersList } from './component/MembersList';

export const MembersMain: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={1}>
                <SideSection />
            </Grid>
            <Grid item xs={11}>
                <Navigation />
                <Box padding="30px">
                    <MembersHeader />
                    <MembersList />
                </Box>
            </Grid>
        </Grid>
    );
};
