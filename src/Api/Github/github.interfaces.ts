import {Response} from '../../Request/request.interfaces';

export interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GithubUserAccountPlan {
    name: string;
    space: number;
    collaborators: number;
    private_repos: number;
}

export interface GithubUserAccount extends GithubUser {
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    plan?: GithubUserAccountPlan;
}

export interface GithubUsersParams {
    since: number;
    per_page: number;
}

export interface GithubUsersCountParams {
    q: string;
}

export interface GithubUserProfileParams {
    username: string;
}

export interface GithubUsersCount {
    total_count: number;
}

export type GithubUserResponse = Response<GithubUserAccount>;
export type GithubUsersResponse = Response<GithubUser[]>;
export type GithubUsersCountResponse = Response<GithubUsersCount>;
export type GithubUserProfileResponse = Response<GithubUserAccount>;

export type GetGithubUser = Promise<GithubUserResponse>;
export type GetGithubUsers = Promise<GithubUsersResponse>;
export type GetGithubUsersCount = Promise<GithubUsersCountResponse>;
export type GetGithubUserProfileResponse = Promise<GithubUserProfileResponse>;
