import { useContext } from 'react';
import RouterContext from '../RouterContext';

const useState = () => {
  const [state] = useContext(RouterContext);
  return state;
};

export default useState;
