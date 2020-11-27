import { GithubApi } from '../Github/GithubApi';
import { GithubUserResponse, GithubUsersResponse } from '../Github/github.interfaces';
import { usersData } from './constants/mockUsers';
import { usersDetailsData } from './constants/mockUsersDetails';

export class SandboxApi extends GithubApi {
    public getGithubUser(params: { username: string }): GithubUserResponse {
        return new Promise((resolve, reject) => {
            const userDetails = usersDetailsData.find((user) => user.login === params.username);
            if (userDetails) {
                resolve({
                    data: userDetails,
                    statusText: 'OK',
                    config: {},
                    headers: {},
                    status: 200,
                });
            } else {
                reject({
                    status: 404,
                    statusText: 'Not Found',
                });
            }
            
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
