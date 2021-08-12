import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { GetProjectsParams, ProjectResponse } from 'interface/api/project';
import { httpService } from 'services/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import { errorToastNotify } from 'toasts/component/errorToast';
import type { RootState } from './root-store';

interface IProjectState {
    projects: ProjectResponse;
}

const initialState: IProjectState = {
    projects: [],
};

export const getProjectsAsync = createAsyncThunk(
    'app/getProjects',
    ({ page = PAGE, limit = LIMIT }: GetProjectsParams = { page: PAGE, limit: LIMIT }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<ProjectResponse>('projects', { params });
    },
);

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getProjectsAsync.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (data) {
                    state.projects = data;
                }
            })
            .addCase(getProjectsAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            }),
});

export const projectsSelector = (state: RootState): IProjectState => state.projects;

export const projectsDataSelector = createSelector(projectsSelector, ({ projects }) => projects);

export const projectsReducer = projectSlice.reducer;
