import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Api/Api';
import { GithubUsersCountResponse } from '../Api/Github/github.interfaces';
import { LoadingState } from '../enums/loadingState';
import { RootState } from '../Root/root.interfaces';
import { RootDispatch } from '../Root/RootStore/rootStore.interfaces';
import { GithubUsersCountActionType } from './enums/GithubUsersCountActionType';

export const fetchGithubUsersCount = createAsyncThunk<
    GithubUsersCountResponse | undefined,
    undefined,
    {
        dispatch: RootDispatch,
        state: RootState,
    }
>(
    GithubUsersCountActionType.Fetch,
    async (params, { getState, requestId }) => {
        const { currentRequestId, loading } = getState().githubUsersCount;
        if (loading !== LoadingState.Pending || requestId !== currentRequestId) {
            return;
        }
        const response = await (await API).getGithubUsersCount();
        return response;
    }
);
