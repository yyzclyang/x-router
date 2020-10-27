import React from 'react';
import Home from './home';
import About from './about';
import { HashRouter as Router, Route } from 'x-router';
import './app.css';

const App = () => {
  return (
    <>
      <h1>X-Router</h1>
      <Router>
        <>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </>
      </Router>
    </>
  );
};

export default App;
