import { gql } from '@apollo/client';

export const getAllProjects = gql`
    query getAllProjects($page: Int!, $perPage: Int!) {
        allProjects(page: $page, perPage: $perPage) {
            id
            img
            title
            views
            dateCreate
            dateDue
            reporter
            stats
        }
    }
`;

export const getTotalCount = gql`
    query getTotalCount {
        _allProjectsMeta {
            count
        }
    }
`;
