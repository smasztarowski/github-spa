import { GithubApi } from '../Github/GithubApi';
import { GithubUserResponse, GithubUsersResponse } from '../Github/github.interfaces';
import { usersData } from './constants/mockUsers';
import { usersDetailsData } from './constants/mockUsersDetails';

export class SandboxApi extends GithubApi {
    public getGithubUser(params: { username: string }): GithubUserResponse {
        return new Promise((resolve) => {
            const userDetails = usersDetailsData.find((user) => user.login === params.username);
            resolve({
                data: userDetails,
                statusText: '',
                config: {},
                headers: {
                    link: '',
                },
                status: 200,
            });
        });
    }
    public getGithubUsers(): GithubUsersResponse {
        return Promise.resolve({
            data: usersData,
            statusText: '',
            config: {},
            headers: {
                link: '',
            },
            status: 200,
        })
    }
}
