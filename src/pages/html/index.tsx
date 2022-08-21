import React from 'react';

export const LazyHtmlPage = React.lazy(() => import('./HtmlPage'));

export const LazyHtmlDetailPage = React.lazy(() => import('./HtmlDetailPage'));
