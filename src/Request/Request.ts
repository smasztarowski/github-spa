import axios from 'axios';

import { Response, RequestConfig } from './request.interfaces';

class Request {
    public get<Res, ConfigParams = Record<string, unknown>>(url: string, config?: RequestConfig<ConfigParams>): Promise<Response<Res>> {
        return axios.get<Res, Response<Res>>(url, config);
    }
}

export const request = new Request();
