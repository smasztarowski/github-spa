import { GithubApi } from '../Github/GithubApi';
import { GetGithubUser, GetGithubUsers, GetGithubUsersCount, GithubUser, GithubUsersParams } from '../Github/github.interfaces';
import { usersData } from './constants/mockUsers';
import { usersDetailsData } from './constants/mockUsersDetails';

export class SandboxApi extends GithubApi {
    public getGithubUser(params: { username: string }): GetGithubUser {
        return new Promise((resolve, reject) => {
            const userDetails = usersDetailsData.find((user) => user.login === params.username);
            if (userDetails) {
                resolve({
                    data: userDetails,
                    statusText: 'OK',
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
    public getGithubUsers(params: GithubUsersParams): GetGithubUsers {
        const { since, per_page } = params;
        const sinceUserIndex = usersData.findIndex((user: GithubUser) => user.id === since);
        const start = sinceUserIndex < 0 ? 0 : sinceUserIndex
        const end = start + per_page;

        return Promise.resolve({
            data: usersData.slice(start, end),
            statusText: '',
            config: {},
            headers: {
                link: this.getLinkHeader(params),
            },
            status: 200,
        })
    }

    public getGithubUsersCount(): GetGithubUsersCount {
        return Promise.resolve({
            data: {
                total_count: usersData.length
            },
            statusText: '',
            config: {},
            headers: {
                link: '',
            },
            status: 200,
        });
    }

    private getLinkHeader(params: GithubUsersParams): string {
        const { since, per_page } = params;
        const allPages = Math.ceil(usersData.length / per_page);
        const currentPage = Math.ceil(since / per_page);
        const prevPage = currentPage - 1;
        const nextPage = currentPage + 1;
        const prev = `<https://api.github.com/user/repos?page=${prevPage}&per_page=${per_page}>; rel="prev"`;
        const next = `<https://api.github.com/user/repos?page=${nextPage}&per_page=${per_page}>; rel="next"`;
        const last = `<https://api.github.com/user/repos?page=${allPages}&per_page=${per_page}>; rel="last"`;
        const first = `<https://api.github.com/user/repos?page=1&per_page=${per_page}>; rel="last"`;

        let linkValue = '';

        if (prevPage > 0) {
            linkValue = `${prev}, ${first}`;
        }

        if (nextPage < allPages) {
            linkValue += `, ${next}, ${last}`
        }

        return linkValue;
    }
}
