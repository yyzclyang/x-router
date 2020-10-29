import React, { useEffect } from 'react';
import { useHistory } from './hooks';

const Redirect = props => {
  const { to, push = false } = props;
  const history = useHistory();

  useEffect(() => {
    (push ? history.push : history.replace)(to);
  }, []);

  return null;
};

export default Redirect;
