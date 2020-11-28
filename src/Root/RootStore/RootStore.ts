import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import { Env } from '../../utils/env';
import { rootReducer } from '../root.reducer';
import { githubUsersInitialState } from '../../GithubUsers/constants/initialState';
import { githubUsersCountInitialState } from '../../GithubUsersCount/constants/initialState';
import { RootState } from '../root.interfaces';

const preloadedState: RootState = {
    githubUsers: githubUsersInitialState,
    githubUsersCount: githubUsersCountInitialState,
};

export const rootStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: Env.isDevelopment(),
    preloadedState,
});
