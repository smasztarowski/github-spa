export interface Response<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, unknown> & Partial<{
        link: string;
    }>;
}

export interface RequestConfig<Params = Record<string, unknown>> {
    params?: Params;
    headers?: Record<string, unknown>;
}

export interface PaginationPage {
    page: string;
    per_page: string;
    rel: string;
    url: string;
    since?: string;
}

export interface PaginationLinks {
    next?: PaginationPage;
    prev?: PaginationPage;
    last?: PaginationPage;
}

export type Pagination = PaginationLinks | null;
