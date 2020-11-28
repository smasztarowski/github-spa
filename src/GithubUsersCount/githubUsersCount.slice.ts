import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../enums/loadingState';
import { githubUsersCountInitialState } from './constants/initialState';
import { fetchGithubUsersCount } from './githubUsersCount.actions';

export const githubUsersCountSlice = createSlice({
    name: 'githubUsersCount',
    initialState: githubUsersCountInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGithubUsersCount.pending, (state, action) => {
                if (state.loading === LoadingState.Idle) {
                    state.loading = LoadingState.Pending;
                    state.currentRequestId = action.meta.requestId;
                }
            })
            .addCase(fetchGithubUsersCount.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
                    state.loading = LoadingState.Finished;
                    state.totalCount = action.payload?.data?.total_count ?? 0;
                    state.currentRequestId = undefined
                }
            })
            .addCase(fetchGithubUsersCount.rejected, (state, action) => {
                const { requestId } = action.meta
                if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
                    state.loading = LoadingState.Error;
                    state.currentRequestId = undefined;
                }
            });
    },
});

