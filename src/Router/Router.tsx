import React, { FC, Suspense } from 'react';
import {
    Switch,
    Route as ReactRoute,
    Link
} from 'react-router-dom';

import { Error404 } from '../Error404/Error404';
import { Route } from './Route/Route';

import { routes } from './router.routes';
import { getRouteUrl } from './utils/routeData';

import { View } from '../enums/view';

export const Router: FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={getRouteUrl(View.Home)}>Home</Link>
                    </li>
                    <li>
                        <Link to={getRouteUrl(View.Dashboard)}>dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<div>...loading</div>}>
                <Switch>
                    {Object.entries(routes).map(([key, route]) => {
                        return (
                            <Route
                                key={key}
                                exact={route.exact ?? true}
                                strict={route.strict ?? false}
                                path={route.url}
                                component={route.component}
                            />
                        );
                    })}

                    <ReactRoute path="*">
                        <Error404 />
                    </ReactRoute>
                </Switch>
            </Suspense>

        </div>
    );
};

Router.displayName = Router.name;
