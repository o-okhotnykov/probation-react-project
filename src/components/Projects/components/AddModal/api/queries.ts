import { gql } from '@apollo/client';

export const createProject = gql`
    mutation addProject(
        $img: String!
        $title: String!
        $dateCreate: String!
        $reporter: String!
        $dateDue: String!
        $stats: String!
        $reporterId: Int!
        $views: Int!
    ) {
        createProject(
            img: $img
            title: $title
            dateCreate: $dateCreate
            reporter: $reporter
            dateDue: $dateDue
            stats: $stats
            reporterId: $reporterId
            views: $views
        ) {
            id
        }
    }
`;
