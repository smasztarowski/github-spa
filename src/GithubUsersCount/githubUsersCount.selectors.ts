import { createSelector } from 'reselect'
import { RootState } from '../Root/root.interfaces';

const getGithubUsersCountState = (state: RootState) => state.githubUsersCount;

export const getGithubUsersTotalCount = createSelector(
    getGithubUsersCountState,
    state => state.totalCount,
);

export const getGithubUsersCountLoadingState = createSelector(
    getGithubUsersCountState,
    state => state.loading,
);
