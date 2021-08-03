export type Project = {
    id?: number;
    img?: string;
    title: string;
    dateCreate: string;
    reporter: string;
    dateDue: string;
    stats: string;
    value?: string;
};

export type ProjectResponse = Project[];

export type GetProjectsParams = {
    page?: number;
    limit?: number;
};
