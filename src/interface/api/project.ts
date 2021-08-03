export type Project = {
    img: string;
    title: string;
    dateCreate: string;
    reporter: string;
    dateDue: string;
    stats: string;
};

export type ProjectResponse = Project[];

export type GetProjectsParams = {
    page?: number;
    limit?: number;
};
