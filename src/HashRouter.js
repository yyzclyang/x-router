import React, { useCallback, useEffect, useReducer } from 'react';
import { HashChangeEvent, ChangePathname } from './type';
import Context, { initialState, reducer } from './context';

const HashRouter = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const listen = useCallback(e => {
    dispatch({ type: ChangePathname, payload: window.location.hash || '/' });
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
