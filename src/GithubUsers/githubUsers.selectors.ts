import { createSelector } from 'reselect'
import { RootState } from '../Root/root.interfaces';

const getGithubUsersState = (state: RootState) => state.githubUsers;

export const getGithubUsers = createSelector(
    getGithubUsersState,
    state => state.entities
);
