export function bindUrlParams(url: string, params: Record<string, unknown>): string {
    return Object.keys(params)
        .reduce(
            (path, param) => path.replace(new RegExp(`(\\/):${param}\\??(\\/|$)`, 'g'), `$1${params[param]}$2`),
            url,
        )
        .replace(/\/:(?:(?!\/).)+\?/g, ''); //optional params
}
