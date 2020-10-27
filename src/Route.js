import React, { useContext } from 'react';
import Context from './context';

const Route = props => {
  const { path, component: Component } = props;
  const [state] = useContext(Context);

  return null;
};

export default Route;
