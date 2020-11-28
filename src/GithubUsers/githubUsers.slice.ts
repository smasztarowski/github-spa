import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../enums/loadingState';
import { getPaginationData } from '../Request/utils/getPaginationData';
import { githubUsersInitialState } from './constants/initialState';
import { fetchGithubUsers } from './githubUsers.acions';

export const githubUsersSlice = createSlice({
  name: 'githubUsers',
  initialState: githubUsersInitialState,
  reducers: {
    setCurrentPage(state, acttion: PayloadAction<number>) {
      state.currentPage = acttion.payload;
    },
    setFetchedPages(state, acttion: PayloadAction<Record<number, boolean>>) {
      state.fetchedPages = {
        ...state.fetchedPages,
        ...acttion.payload,
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubUsers.pending, (state, action) => {
        if (state.loading === LoadingState.Idle) {
          state.loading = LoadingState.Pending;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchGithubUsers.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
          state.loading = LoadingState.Idle;
          state.entities = [
            ...state.entities,
            ...(action.payload?.data ?? []),
          ];
          state.meta.pagintion = getPaginationData(action.payload);
          state.currentRequestId = undefined
        }
      })
      .addCase(fetchGithubUsers.rejected, (state, action) => {
        const { requestId } = action.meta
        if (state.loading === LoadingState.Pending && state.currentRequestId === requestId) {
          state.loading = LoadingState.Error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { setCurrentPage, setFetchedPages } = githubUsersSlice.actions;
