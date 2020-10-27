import React, { useContext } from 'react';
import Context from './context';
import { matchPath } from './utils';

const Route = props => {
  const { component: Component } = props;
  const [state] = useContext(Context);
  const {
    location: { pathname }
  } = state;

  return matchPath(pathname, props) ? <Component /> : null;
};

export default Route;
