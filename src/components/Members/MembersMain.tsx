import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import { useStyles } from 'components/Dashboard/style';
import { MembersList } from './component/MembersList';
import { MembersHeader } from './component/MembersHeader';

export const MembersMain: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1} className={classes.sideSection}>
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
