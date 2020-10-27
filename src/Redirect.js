import React, { useEffect } from 'react';
import { useHistory } from './hooks';

const Redirect = props => {
  const { to } = props;
  const history = useHistory();
  useEffect(() => {
    history.push(to);
  }, []);

  return null;
};

export default Redirect;
