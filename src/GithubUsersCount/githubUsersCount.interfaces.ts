import { LoadingState } from '../enums/loadingState';

export interface GithubUsersCountState {
    totalCount: number,
    loading: LoadingState,
    currentRequestId?: string;
};
