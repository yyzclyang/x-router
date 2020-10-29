import React from 'react';
import RouterContext from './RouterContext';
import { useRouterContext } from './hooks';
import { matchPath } from './utils';

const Switch = props => {
  const context = useRouterContext();
  const location = props.location || context.location;

  return (
    <>
      {(() => {
        let element;
        let match;

        React.Children.forEach(props.children, child => {
          if (!match && React.isValidElement(child)) {
            element = child;

            const path = child.props.path || child.props.from;

            match = path
              ? matchPath(location.pathname, {
                  ...child.props,
                  path
                })
              : context.match;
          }
        });
        return match ? React.cloneElement(element, { location }) : null;
      })()}
    </>
  );
};

export default Switch;
