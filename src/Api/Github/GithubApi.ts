import { request } from '../../Request/Request';
import {
    GithubUserAccount,
    GithubUser,
    GithubUserResponse,
    GithubUsersResponse,
} from './github.interfaces';

export class GithubApi {
    private apiUrl = 'https://api.github.com/';
    private headers = {
        Accept: 'application/vnd.github.v3+json',
    };

    public getGithubUser(params: { username: string }): GithubUserResponse {
        return request.get<GithubUserAccount>(
            `${this.apiUrl}user`, {
            params, headers: this.headers,
        });
    }

    public getGithubUsers(params?: { since: number, per_page: number }): GithubUsersResponse {
        return request.get<GithubUser[]>(
            `${this.apiUrl}users`, {
            params,
            headers: this.headers,
        });
    }
}
