import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../enums/loadingState';
import { githubUserProfileInitialState } from './constants/initialState';
import { fetchGithubUserProfile } from './githubUserProfile.actions';

export const githubUserProfileSlice = createSlice({
    name: 'githubUserProfile',
    initialState: githubUserProfileInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGithubUserProfile.pending, (state, action) => {
                if (state.loading === LoadingState.Idle) {
                    state.loading = LoadingState.Pending;
                    state.currentRequestId = action.meta.requestId;
                }
            })
            .addCase(fetchGithubUserProfile.fulfilled, (state, action) => {
                const { requestId } = action.meta
                const { payload } = action;
                if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
                    state.loading = LoadingState.Idle;

                    if (payload) {
                        const { data } = payload;
                        state.entities[data.login] = {
                            ...(state.entities[data.login] ?? {}),
                            ...data,
                        }
                    }

                    state.currentRequestId = undefined
                }
            })
            .addCase(fetchGithubUserProfile.rejected, (state, action) => {
                const { requestId } = action.meta
                if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
                    state.loading = LoadingState.Error;
                    state.currentRequestId = undefined;
                }
            });
    },
});

