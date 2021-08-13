import React from 'react';
import { Grid } from '@material-ui/core';
import { Navigation } from 'components/Navigation';
import { SideSection } from 'components/SideSection';
import { MembersHeader } from './component/MembersHeader';
import { MembersList } from './component/MembersList';

export const MembersMain: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={1} className="side-section-container">
                <SideSection />
            </Grid>
            <Grid item xs={11} className="main-section">
                <Navigation />
                <div className="members-container">
                    <MembersHeader />
                    <MembersList />
                </div>
            </Grid>
        </Grid>
    );
};
