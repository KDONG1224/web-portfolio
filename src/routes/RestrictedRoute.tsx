// base
import React from 'react';
import { Route, RouteProps } from 'react-router';

interface RestrictedRouteProps extends RouteProps {
  path: string | string[];
  fallback: React.FunctionComponent;
}

export const RestrictedRoute = (props: RestrictedRouteProps) => {
  const { component, fallback, ...rest } = props;
  return <Route {...rest} component={component ? component : fallback} />;
};
