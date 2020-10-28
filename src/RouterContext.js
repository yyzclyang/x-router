import React from 'react';
import { ChangePathname } from './type';

const RouterContext = React.createContext(null);

const initialState = {
  history: {
    push: to => {
      window.location.hash = to;
    }
  },
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

export default RouterContext;
export { initialState, reducer };
