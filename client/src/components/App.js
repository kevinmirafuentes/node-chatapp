import React, { Component } from 'react';
import '../css/app.css';

import MessageForm from '../containers/MessageForm'
import MessageBoard from '../containers/MessageBoard'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageBoard></MessageBoard>
        <MessageForm></MessageForm>
      </div>
    )
  }
}

