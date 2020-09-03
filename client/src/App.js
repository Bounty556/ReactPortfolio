import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/Portfolio' component={Portfolio} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
