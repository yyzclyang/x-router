import React from 'react';

const Context = React.createContext(null);

const initialState = {
  history: {},
  location: {},
  match: {}
};

const reducers = {};

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
