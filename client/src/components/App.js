import React, { Component } from 'react';
import '../css/app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './Home'
import Chatroom from '../containers/Chatroom'

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:chatroom">
              <Chatroom />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

