
import { LoadingState } from '../../enums/loadingState';
import { GithubUsersState } from '../githubUsers.interfaces';

export const githubUsersInitialState: GithubUsersState = {
    loading: LoadingState.Idle,
    entities: [],
    currentRequestId: undefined,
    meta: {
        pagintion: null,
    },
};
