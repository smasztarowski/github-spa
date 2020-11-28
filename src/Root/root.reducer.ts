import { combineReducers } from '@reduxjs/toolkit';
import { githubUsersReducer } from '../GithubUsers/githubUsers.reducer';

export const rootReducer = combineReducers({
    githubUsers: githubUsersReducer,
});
