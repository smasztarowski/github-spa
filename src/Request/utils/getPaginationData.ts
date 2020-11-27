import parseLinkHeader, { Links } from 'parse-link-header';
import { Response } from '../request.interfaces';

export function getPaginationData(respone: Response<unknown>): Links | null {
    const { headers } = respone;
    const { link } = headers;

    return parseLinkHeader(link ?? '');
}
