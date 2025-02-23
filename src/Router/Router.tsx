import React, { FC, Suspense } from 'react';
import {
    Switch,
    Route as ReactRoute,
} from 'react-router-dom';
import { AppLoader } from '../AppLoader/AppLoader';

import { Error404 } from '../views/Error404/Error404';
import { Route } from './Route/Route';

import { routes } from './router.routes';

export const Router: FC = () => {
    return (
        <div>
            <Suspense fallback={<AppLoader />}>
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
