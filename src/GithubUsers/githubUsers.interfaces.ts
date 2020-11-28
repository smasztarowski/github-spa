import { GithubUser } from '../Api/Github/github.interfaces';
import { LoadingState } from '../enums/loadingState';
import { Pagination } from '../Request/request.interfaces';

export interface GithubUsersMeta {
    pagintion: Pagination;
}

export interface GithubUsersState {
    entities: GithubUser[],
    loading: LoadingState,
    currentRequestId?: string;
    meta: GithubUsersMeta;
};
