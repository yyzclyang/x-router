import React, { useEffect, useReducer } from 'react';
import Context, { initialState, reducer } from './context';

const HashRouter = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.location.hash = window.location.hash || '/';
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default HashRouter;
