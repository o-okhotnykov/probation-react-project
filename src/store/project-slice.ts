import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { Project, ProjectAssets, ProjectResponse } from 'types/api/project';
import { httpService } from 'services/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import { errorToastNotify } from 'toasts';
import type { RootState } from './root-store';

interface IProjectState {
    projects: ProjectResponse;
    currentProject: Project | null;
    currentProjectAssets: ProjectAssets[];
    total: number;
    totalAssets: number;
    views: number;
}

const initialState: IProjectState = {
    projects: [],
    currentProject: null,
    currentProjectAssets: [],
    total: 0,
    totalAssets: 0,
    views: 0,
};

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
    reducers: {
        clearAssets(state: IProjectState) {
            state.currentProjectAssets = [];
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProjectAssetsAsync.fulfilled, (state, action) => {
                const { data, headers } = action.payload;
                const totalCount = parseInt(headers['x-total-count'], 10);

                if (data && !Number.isNaN(totalCount)) {
                    state.totalAssets = totalCount;
                    state.currentProjectAssets.push(...data);
                }
            })
            .addCase(getProjectAssetsAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            }),
});

export const { clearAssets } = projectSlice.actions;

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
