import { SandboxApi } from './Sandbox/SandboxApi';
import { GithubApi } from './Github/GithubApi';
import { Env } from '../utils/env';

export class ApiFactory {
    public static getApi(): GithubApi {
        if (Env.isDevelopment()) {
            return new SandboxApi();
        }

        return new GithubApi();
    }
}
