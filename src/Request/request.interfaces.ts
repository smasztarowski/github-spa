export interface Response<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, unknown> & Partial<{
        link: string;
    }>;
    config: Record<string, unknown>;
}

export interface RequestConfig {
    params?: Record<string, unknown>;
    headers?: Record<string, unknown>;
}
