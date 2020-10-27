import React, { useContext } from 'react';
import Context from './context';

const Route = props => {
  const { path, component: Component } = props;
  const [state] = useContext(Context);
  const {
    location: { pathname }
  } = state;

  return path === pathname ? <Component /> : null;
};

export default Route;
