import React, { useCallback, useEffect, useState } from 'react';
import { createHashHistory as createHistory } from 'history';
import RouterContext from './RouterContext';

const HashRouter = props => {
  const [history] = useState(() => createHistory());
  const [location, setLocation] = useState(history.location);

  const listen = useCallback(({ location }) => {
    setLocation(location);
  }, []);

  useEffect(() => {
    const unlisten = history.listen(listen);
    return () => {
      unlisten();
    };
  }, [listen]);

  return (
    <RouterContext.Provider
      value={{
        history,
        location,
        match: {
          path: '/',
          url: '/',
          params: {},
          isExact: location.pathname === '/'
        }
      }}
    >
      {props.children}
    </RouterContext.Provider>
  );
};
HashRouter.displayName = 'HashRouter';

export default HashRouter;
