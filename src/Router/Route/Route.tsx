import { FC, useCallback } from 'react';
import { Redirect, Route as ReactRoute, RouteComponentProps, RouteProps as ReactRouteProps } from 'react-router-dom';

import { getRouteUrl } from '../utils/routeData';

import { View } from '../../enums/view';

type RouteProps = Partial<ReactRouteProps>;

export const Route: FC<RouteProps> = (props) => {
    const { component: Component, ...rest } = props;

    const routeRenderer = useCallback((routeProps: RouteComponentProps) => {
        if (!Component) { return <Redirect to={getRouteUrl(View.Home)} />; }

        return (
            <Component {...routeProps} />
        );
    }, [Component]);

    return (
        <ReactRoute {...rest} render={routeRenderer} />
    );
};

Route.displayName = Route.name;
