import { Project } from '../../../types/api/project';

export interface GetProjectsResponse {
    allProjects: Project[];
}

export interface GetTotalCountResponse {
    _allProjectsMeta: { count: number };
}
