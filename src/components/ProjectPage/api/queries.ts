import { gql } from '@apollo/client';

export const getCurrentProject = gql`
    query getCurrentProject($id: ID!) {
        Project(id: $id) {
            id
            img
            title
            reporter
            dateCreate
            dateDue
            stats
            reporterId
        }
    }
`;

export const removeProjectQuery = gql`
    mutation removeProject($id: ID!) {
        removeProject(id: $id) {
            id
        }
    }
`;
