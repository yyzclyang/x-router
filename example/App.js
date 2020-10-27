import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'x-router';
import Home from './home';
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
          </div>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </>
      </Router>
    </>
  );
};

export default App;
