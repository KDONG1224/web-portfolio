import React from 'react';

export const LazyAlgorithmPage = React.lazy(() => import('./AlgorithmPage'));

export const LazyAlgorithmDetailPage = React.lazy(
  () => import('./AlgorithmDetailePage')
);
