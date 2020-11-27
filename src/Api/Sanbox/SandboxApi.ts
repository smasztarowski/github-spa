import { GithubApi } from '../Github/GithubApi';
import { GithubUserResponse, GithubUsersResponse } from '../Github/github.interfaces';

export class SandboxApi extends GithubApi {
    public getGithubUser(): GithubUserResponse {
        throw new Error('Method not implemented.');
    }
    public getGithubUsers(): GithubUsersResponse {
        throw new Error('Method not implemented.');
    }
}
