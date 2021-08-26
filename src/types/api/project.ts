export type Project = {
    title: string;
    dateCreate: string;
    reporter: string;
    dateDue: string;
    stats: ProjectState;
    id: number;
    img?: string;
    value?: string;
    projectAssets?: string[];
};
export type ProjectAssets = {
    id: number;
    url: string;
    projectId: number;
};
export enum ProjectState {
    progress = 'progress',
    done = 'done',
    open = 'open',
}
export type ProjectResponse = Project[];

export type GetProjectsParams = {
    page?: number;
    limit?: number;
};
