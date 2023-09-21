import { lazy } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { RouteInt } from "../interfaces/interfaces";
import { NoLazy } from '../01-lazyload/pages/NoLazy';





const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));


export const routes: RouteInt[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout-Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    
];