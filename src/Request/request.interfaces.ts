import { Links } from 'parse-link-header';

export interface Response<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, unknown> & Partial<{
        link: string;
    }>;
    config: Record<string, unknown>;
}

export interface RequestConfig<Params = Record<string, unknown>> {
    params?: Params;
    headers?: Record<string, unknown>;
}

export type Pagination = Links | null;
