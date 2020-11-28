
import { LoadingState } from '../../enums/loadingState';
import { GithubUsersCountState } from '../githubUsersCount.interfaces';

export const githubUsersCountInitialState: GithubUsersCountState = {
    loading: LoadingState.Idle,
    totalCount: 0,
    currentRequestId: undefined,
};
