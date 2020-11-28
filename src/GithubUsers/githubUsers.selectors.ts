import { createSelector } from 'reselect'
import { RootState } from '../Root/root.interfaces';

const getGithubUsersState = (state: RootState) => state.githubUsers;

export const getGithubUsers = createSelector(
    getGithubUsersState,
    state => state.entities,
);

export const getGithubUsersMeta = createSelector(
    getGithubUsersState,
    state => state.meta,
);

export const getGithubUsersPagination = createSelector(
    getGithubUsersMeta,
    state => state.pagintion,
);
