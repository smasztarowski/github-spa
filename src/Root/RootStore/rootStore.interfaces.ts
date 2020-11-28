import { GithubUsersState } from '../../GithubUsers/githubUsers.interfaces';
import { rootStore } from './RootStore';

export interface RootStoreState {
    githubUsers: GithubUsersState;
}

export type RootDispatch = typeof rootStore.dispatch;
