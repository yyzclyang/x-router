import React from 'react';
import { matchPath } from './utils';
import { useLocation } from './hooks';

const Route = props => {
  const { component: Component } = props;
  const location = useLocation();
  const { pathname } = location;
  const [match, params] = matchPath(pathname, props);
  return match ? <Component params={params} /> : null;
};

export default Route;
