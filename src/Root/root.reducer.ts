import { combineReducers } from '@reduxjs/toolkit';
import { githubUsersReducer } from '../GithubUsers/githubUsers.reducer';
import { githubUsersCountReducer } from '../GithubUsersCount/githubUsersCount.reducer';

export const rootReducer = combineReducers({
    githubUsers: githubUsersReducer,
    githubUsersCount: githubUsersCountReducer,
});
