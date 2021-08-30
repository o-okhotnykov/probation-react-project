import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { GetProjectsParams, Project, ProjectAssets, ProjectResponse } from 'types/api/project';
import { httpService } from 'services/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import { errorToastNotify } from 'toasts/component/errorToast';
import { successfulToastNotify } from 'toasts';
import type { RootState } from './root-store';

interface IProjectState {
    projects: ProjectResponse;
    currentProject: Project | null;
    currentProjectAssets: ProjectAssets[];
    total: number;
    totalAssets: number;
}

const initialState: IProjectState = {
    projects: [],
    currentProject: null,
    currentProjectAssets: [],
    total: 0,
    totalAssets: 0,
};

export const getProjectsAsync = createAsyncThunk(
    'app/getProjects',
    ({ page = PAGE, limit = LIMIT }: GetProjectsParams = { page: PAGE, limit: LIMIT }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<ProjectResponse>('projects', { params });
    },
);

export const getProjectByIdAsync = createAsyncThunk('app/getProjectById', (id: number) => {
    return httpService.get<Project>(`projects/${id}`, {});
});

export const addProjectAsync = createAsyncThunk('app/addProject', (project: Project) => {
    return httpService.post<Project>('projects', project);
});
export const patchProjectsViews = createAsyncThunk(
    'app/patchViews',
    ({ id, views }: { id: number; views: number }) => {
        return httpService.patch<Project>(`projects/${id}`, { data: { views } });
    },
);

export const getProjectAssetsAsync = createAsyncThunk(
    'app/getProjectAssetsProjects',
    ({ id, page = PAGE, limit = LIMIT }: { id: number; page: number; limit: number }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<ProjectAssets[]>(`projects/${id}/images`, { params });
    },
);

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getProjectsAsync.fulfilled, (state, action) => {
                const { data, headers } = action.payload;
                const totalCount = parseInt(headers['x-total-count'], 10);
                if (data && !Number.isNaN(totalCount)) {
                    state.total = totalCount;
                    state.projects = data;
                }
            })
            .addCase(getProjectByIdAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                if (data) {
                    state.currentProject = data;
                }
            })
            .addCase(addProjectAsync.fulfilled, () => {
                successfulToastNotify('Project was added');
            })
            .addCase(getProjectAssetsAsync.fulfilled, (state, action) => {
                const { data, headers } = action.payload;
                const totalCount = parseInt(headers['x-total-count'], 10);

                if (data && !Number.isNaN(totalCount)) {
                    state.totalAssets = totalCount;
                    state.currentProjectAssets.push(...data);
                }
            })
            .addCase(getProjectsAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(getProjectByIdAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(addProjectAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            }),
});

export const projectsSelector = (state: RootState): IProjectState => state.projects;

export const projectsDataSelector = createSelector(projectsSelector, ({ projects }) => projects);

export const projectsTotalSelector = createSelector(projectsSelector, ({ total }) => total);

export const currentProjectSelector = createSelector(
    projectsSelector,
    ({ currentProject }) => currentProject,
);

export const currentProjectAssetsSelector = createSelector(
    projectsSelector,
    ({ currentProjectAssets }) => currentProjectAssets,
);

export const totalAssetsSelector = createSelector(
    projectsSelector,
    ({ totalAssets }) => totalAssets,
);

export const projectsReducer = projectSlice.reducer;
