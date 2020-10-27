import React from 'react';
import { useHistory } from './hooks';

const Link = props => {
  const { to } = props;
  const history = useHistory();

  return (
    <a
      onClick={() => {
        history.push(to);
      }}
    >
      {props.children}
    </a>
  );
};

export default Link;
