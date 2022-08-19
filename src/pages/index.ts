import { lazy } from 'react';

export * from './sample';

export const LazyHomePage = lazy(() => import('./HomePage'));
