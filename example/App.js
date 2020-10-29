import React from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'x-router';
import Home from './home';
import Profile from './profile';
import About from './about';
import './app.css';

const App = () => {
  return (
    <>
      <h1>X-Router</h1>
      <Router>
        <>
          <div>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/profile">profile</Link>
          </div>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </>
      </Router>
    </>
  );
};

export default App;
