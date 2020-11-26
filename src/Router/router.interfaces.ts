import { LazyExoticComponent, ComponentType } from 'react'
import { RouteComponentProps } from 'react-router';

export interface IView {
    url: string;
    exact?: boolean;
    strict?: boolean;
    component: LazyExoticComponent<ComponentType<RouteComponentProps>>;
}
