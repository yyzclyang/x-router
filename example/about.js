import React from 'react';
import { Link, Route } from 'x-router';
import User from './user';
import Company from './company';

const About = () => {
  return (
    <div>
      about
      <div>
        <Link to="/about/user">User</Link>
        <Link to="/about/company">Company</Link>
      </div>
      <div>
        <Route path="/about/user" component={User} />
        <Route path="/about/company" component={Company} />
      </div>
    </div>
  );
};

export default About;
