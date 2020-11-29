import { FC, useCallback, Fragment } from 'react';
import {
    Redirect,
    Route as ReactRoute,
    RouteComponentProps,
    RouteProps as ReactRouteProps,
} from 'react-router-dom';
import { AppDevTool } from '../../AppDevTool/AppDevTool';

import { getRouteUrl } from '../utils/routeData';

import { View } from '../../enums/view';

type RouteProps = Partial<ReactRouteProps>;

export const Route: FC<RouteProps> = (props) => {
    const { component: Component, ...rest } = props;

    const routeRenderer = useCallback((routeProps: RouteComponentProps) => {
        if (!Component) { return <Redirect to={getRouteUrl(View.Home)} />; }

        return (
            <Fragment>
                <AppDevTool />
                <Component {...routeProps} />
            </Fragment>
        );
    }, [Component]);

    return (
        <ReactRoute {...rest} render={routeRenderer} />
    );
};

Route.displayName = Route.name;
