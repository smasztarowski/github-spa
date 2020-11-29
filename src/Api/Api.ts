import { GithubApi } from './Github/GithubApi';
import { ApiFactory } from './ApiFactory';

export const API: Promise<GithubApi> = ApiFactory.getApi();
