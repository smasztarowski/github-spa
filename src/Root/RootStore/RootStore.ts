import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import { Env } from '../../utils/env';
import { rootReducer } from '../root.reducer';
import { RootStoreState } from './rootStore.interfaces';
import { githubUsersInitialState } from '../../GithubUsers/constants/initialState';

const preloadedState: RootStoreState = {
    githubUsers: githubUsersInitialState,
};

export const rootStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: Env.isDevelopment(),
    preloadedState,
});
