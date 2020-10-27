import React, { useCallback, useEffect, useReducer } from 'react';
import Context, { initialState, reducer } from './context';
import { HashChangeEvent, ChangePathname } from './type';

const HashRouter = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const listen = useCallback(e => {
    dispatch({
      type: ChangePathname,
      payload: window.location.hash.slice(1) || '/'
    });
  }, []);

  useEffect(() => {
    window.location.hash = window.location.hash || '/';
    window.addEventListener(HashChangeEvent, listen);
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default HashRouter;
