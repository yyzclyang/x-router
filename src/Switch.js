import React from 'react';
import { useLocation } from './hooks';
import { matchPath } from './utils';

const Switch = props => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {
        React.Children.map(props.children, child => {
          const [match] = matchPath(pathname, {
            ...child.props,
            path: child.props.path || ''
          });
          return match ? child : null;
        })[0]
      }
    </>
  );
};

export default Switch;
