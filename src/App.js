import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import './App.css';

import Home from './components/Home';
import About from './components/About';
import Log from './components/Log';


const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ Home }>
        <Route path="about" component={ About }></Route>
        <IndexRoute component={ Log }></IndexRoute>
      </Route>
    </Router>
  )
}

export default App;
