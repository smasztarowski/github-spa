import { request } from '../../Request/Request';
import {
    GithubUserAccount,
    GithubUser,
    GithubUsersParams,
    GetGithubUsers,
    GetGithubUser,
} from './github.interfaces';

export class GithubApi {
    private apiUrl = 'https://api.github.com/';
    private headers = {
        Accept: 'application/vnd.github.v3+json',
    };

    public getGithubUser(params: { username: string }): GetGithubUser {
        return request.get<GithubUserAccount>(
            `${this.apiUrl}user`, {
            params, headers: this.headers,
        });
    }

    public getGithubUsers(params: GithubUsersParams): GetGithubUsers {
        return request.get<GithubUser[], GithubUsersParams>(
            `${this.apiUrl}users`, {
            params,
            headers: this.headers,
        });
    }
}
