import React from 'react';
import { useParams } from 'x-router/hooks';

const UserDetail = () => {
  const params = useParams();
  return <div>user detail: {params.id}</div>;
};

export default UserDetail;
