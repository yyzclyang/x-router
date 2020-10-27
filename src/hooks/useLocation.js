import { useContext } from 'react';
import Context from '../context';

export const useLocation = () => {
  const [state] = useContext(Context);
  return state.location;
};
