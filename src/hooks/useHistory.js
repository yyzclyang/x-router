import { useContext } from 'react';
import Context from '../context';

export const useHistory = () => {
  const [state] = useContext(Context);
  return state.history;
};
