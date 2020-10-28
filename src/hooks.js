import { useContext } from 'react';
import RouterContext from './RouterContext';

export const useRouterContext = () => useContext(RouterContext);

export const useHistory = () => useContext(RouterContext).history;

export const useLocation = () => useContext(RouterContext).location;

export const useParams = () => {
  const match = useRouterContext().match;
  return match ? match.params : {};
};
