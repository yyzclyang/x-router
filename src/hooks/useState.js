import { useContext } from 'react';
import Context from '../context';

const useState = () => {
  const [state] = useContext(Context);
  return state;
};

export default useState;
