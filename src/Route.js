import React from 'react';
import RouterContext from './RouterContext';
import { useRouterContext } from './hooks';
import { matchPath } from './utils';

const Route = props => {
  const { component: Component } = props;
  const context = useRouterContext();
  const location = props.location || context.location;

  const { pathname } = location;
  const match = matchPath(pathname, props);

  const _props = { ...context, location, match };

  return match ? (
    <RouterContext.Provider value={_props}>
      <Component {..._props} />
    </RouterContext.Provider>
  ) : null;
};

export default Route;
