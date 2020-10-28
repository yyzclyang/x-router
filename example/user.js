import React from 'react';
import { Route } from 'x-router';
import UserDetail from './userDetail';

const User = () => {
  return (
    <div>
      User
      <Route path="/about/user/:id" exact component={UserDetail} />
    </div>
  );
};

export default User;
