import { routes } from '../router.routes';
import { View } from '../../enums/view';
import { IView } from '../router.interfaces';
import { bindUrlParams } from '../../navigation/utils/url';

function routeData(view: View): IView {
    return routes[view];
}

export function getRouteUrl(view: View, params?: Record<string, unknown>): string {
    const { url } = routeData(view);

    return bindUrlParams(url, params ?? {});
}
