import React from 'react';
import { matchPath } from './utils';
import { useLocation } from './hooks';

const Route = props => {
  const { component: Component } = props;
  const location = useLocation();
  const { pathname } = location;

  return matchPath(pathname, props) ? <Component /> : null;
};

export default Route;
