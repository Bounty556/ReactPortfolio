import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';

import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/Portfolio' component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
