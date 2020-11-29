import { LoadingState } from '../../enums/loadingState';
import { GithubUserProfileState } from '../githubUserProfile.interfaces';

export const githubUserProfileInitialState: GithubUserProfileState = {
    loading: LoadingState.Idle,
    currentRequestId: undefined,
    entities: {},
};
