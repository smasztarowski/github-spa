import { SandboxApi } from './Sandbox/SandboxApi';
import { GithubApi } from './Github/GithubApi';
import { Env } from '../utils/env';
import { getForceProductionApi } from './utils/forceProductionApi';

export class ApiFactory {
    public static async getApi(): Promise<GithubApi> {
        const shouldForceProductionApi = await getForceProductionApi();

        return new Promise((resolve) => {
            if (!shouldForceProductionApi && Env.isDevelopment()) {
                resolve(new SandboxApi());
                return;
            }

            resolve(new GithubApi());
        });
    }
}
