import parseLinkHeader from 'parse-link-header';
import { Pagination, Response } from '../request.interfaces';

export function getPaginationData(respone?: Response<unknown>): Pagination {
    if (!respone) {
        return null;
    }
    const { headers } = respone;
    const { link } = headers;

    return parseLinkHeader(link ?? '');
}
