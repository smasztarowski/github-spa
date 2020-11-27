import { GithubApi } from './Github/GithubApi';
import { ApiFactory } from './ApiFactory';

export const API: GithubApi = ApiFactory.getApi();
