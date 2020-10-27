import React from 'react';
import { ChangePathname } from './type';

const Context = React.createContext(null);

const initialState = {
  history: {},
  location: { pathname: window.location.hash.slice(1) || '/' },
  match: {}
};

const reducers = {
  [ChangePathname]: (state, action) => {
    return {
      ...state,
      location: { ...state.location, pathname: action.payload }
    };
  }
};

const reducer = (state, action) => {
  const actionFn = reducers[action.type];
  if (actionFn) {
    return actionFn(state, action);
  } else {
    throw new Error('unknown type');
  }
};

export default Context;
export { initialState, reducer };
