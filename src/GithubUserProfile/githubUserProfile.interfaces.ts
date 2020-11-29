import { GithubUserAccount } from '../Api/Github/github.interfaces';
import { LoadingState } from '../enums/loadingState';

export interface GithubUserProfileState {
    entities: Record<string, GithubUserAccount>,
    loading: LoadingState,
    currentRequestId?: string;
};
