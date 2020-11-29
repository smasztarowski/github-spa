import { createSelector } from 'reselect'
import { RootState } from '../Root/root.interfaces';

const getGithubUserProfileState = (state: RootState) => state.githubUserProfile;

export const getGithubUserProfileEntities = createSelector(
    getGithubUserProfileState,
    state => state.entities,
);

export const getGithubUserProfile = (login: string) => createSelector(
    getGithubUserProfileEntities,
    state => state[login],
);

export const getGithubUserProfileLoadingState = createSelector(
    getGithubUserProfileState,
    state => state.loading,
);
