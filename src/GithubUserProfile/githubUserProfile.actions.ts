import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Api/Api';
import { GithubUserProfileParams, GithubUserProfileResponse } from '../Api/Github/github.interfaces';
import { LoadingState } from '../enums/loadingState';
import { RootState } from '../Root/root.interfaces';
import { RootDispatch } from '../Root/RootStore/rootStore.interfaces';
import { GithubUserProfileActionType } from './enums/GithubUserProfileActionType';

export const fetchGithubUserProfile = createAsyncThunk<
    GithubUserProfileResponse | undefined,
    GithubUserProfileParams,
    {
        dispatch: RootDispatch,
        state: RootState,
    }
>(
    GithubUserProfileActionType.Fetch,
    async ({username}, { getState, requestId }) => {
        const { currentRequestId, loading, entities } = getState().githubUserProfile;
        if (loading !== LoadingState.Pending || requestId !== currentRequestId) {
            return;
        }

        if (entities[username]) {
            return;
        }
        const response = await (await API).getGithubUser({username});
        return response;
    }
);
