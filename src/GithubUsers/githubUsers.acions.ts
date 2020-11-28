import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Api/Api';
import { GithubUsersParams, GithubUsersResponse } from '../Api/Github/github.interfaces';
import { LoadingState } from '../enums/loadingState';
import { RootState } from '../Root/root.interfaces';
import { RootDispatch } from '../Root/RootStore/rootStore.interfaces';
import { GithubUsersActionType } from './enums/GithubUsersActionType';

export const fetchGithubUsers = createAsyncThunk<
    GithubUsersResponse | undefined,
    GithubUsersParams,
    {
        dispatch: RootDispatch,
        state: RootState,
    }
>(
    GithubUsersActionType.Fetch,
    async ({ since, per_page }, { getState, requestId }) => {
        const { currentRequestId, loading } = getState().githubUsers;
        if (loading !== LoadingState.Pending || requestId !== currentRequestId) {
            return;
        }
        const response = await (await API).getGithubUsers({ since, per_page });
        return response;
    }
);
