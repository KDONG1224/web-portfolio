import React from 'react';

export const LazyAlcholCupPage = React.lazy(() => import('./AlcholCupPage'));

export const LazyAlcholCupDetailPage = React.lazy(
  () => import('./AlcholCupDetailePage')
);
