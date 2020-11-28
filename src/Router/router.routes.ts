import { lazy } from 'react';
import { View } from '../enums/view';
import { IView } from './router.interfaces';

export const routes: Record<View, IView> = {
    [View.Home]: {
        url: '/',
        component: lazy(() => import(/* webpackChunkName: "home-view" */ '../views/Home/Home')),
    },
    [View.User]: {
        url: '/user/:id',
        exact: false,
        component: lazy(() => import(/* webpackChunkName: "user-view" */ '../views/User/User')),
    },
};
