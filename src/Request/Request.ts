import axios from 'axios';

import { Response, RequestConfig } from './request.interfaces';

class Request {
    public get<Res>(url: string, config?: RequestConfig): Promise<Response<Res>> {
        return axios.get<Res, Response<Res>>(url, config);
    }
}

export const request = new Request();
