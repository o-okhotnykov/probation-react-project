export type Project = {
    id?: number;
    img?: string;
    title: string;
    dateCreate: string;
    reporter: string;
    dateDue: string;
    stats: ProjectState;
    value?: string;
};

enum ProjectState {
    progress = 'progress',
    done = 'done',
    open = 'open',
}
export type ProjectResponse = Project[];

export type GetProjectsParams = {
    page?: number;
    limit?: number;
};
