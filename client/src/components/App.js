import React, { Component } from 'react';
import '../css/app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from '../containers/Home'
import Chatroom from '../containers/Chatroom'

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/:chatroom" component={Chatroom}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

