import { createSelector } from 'reselect'
import { RootState } from '../Root/root.interfaces';

const getGithubUsersState = (state: RootState) => state.githubUsers;

export const getGithubUsers = createSelector(
    getGithubUsersState,
    state => state.entities,
);

export const getGithubUsersLoadingState = createSelector(
    getGithubUsersState,
    state => state.loading,
);

export const getGithubUsersCurrentPage = createSelector(
    getGithubUsersState,
    state => state.currentPage,
);

export const getGithubUsersFetchedPages = createSelector(
    getGithubUsersState,
    state => state.fetchedPages,
);

export const getGithubUsersMeta = createSelector(
    getGithubUsersState,
    state => state.meta,
);

export const getGithubUsersPagination = createSelector(
    getGithubUsersMeta,
    state => state.pagintion,
);
