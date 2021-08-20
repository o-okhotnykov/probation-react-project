import React from 'react';
import { MembersHeader } from './component/MembersHeader';
import { MembersList } from './component/MembersList';

export const MembersMain: React.FC = () => {
    return (
        <div className="main-container">
            <MembersHeader />
            <MembersList />
        </div>
    );
};
