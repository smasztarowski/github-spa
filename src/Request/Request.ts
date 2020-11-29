import axios from 'axios';

import { Response, RequestConfig } from './request.interfaces';

class Request {
    public get<Res, ConfigParams = Record<string, unknown>>(url: string, config?: RequestConfig<ConfigParams>): Promise<Response<Res>> {
        return new Promise((resolve, reject) => {
            axios.get<Res, Response<Res> & {config: unknown, request: unknown}>(url, config)
            .then((response) => {
                const {
                    config,
                    request,
                    ...withoutConfig
                } = response;
                resolve({
                    ...withoutConfig,
                });
            })
            .catch(reject);
        });
    }
}

export const request = new Request();
