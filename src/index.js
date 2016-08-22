import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
// import './App.css';

import App from './components/App'
import About from './components/About'
import Log from './components/Log'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ App }>
          <Route path="about" component={ About }></Route>
          <IndexRoute component={ Log }></IndexRoute>
        </Route>
      </Router>
    </Provider>
  )

render(router, document.getElementById('root'));
