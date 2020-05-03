import React, { Component } from 'react';
import './App.css';

import Message from './modules/messages/components/Message';
import MessageForm from './modules/messages/components/MessageForm';

export default class App extends Component {
  state = {
    messages: [
      { sender: { name: 'john'}, contents: 'Lorem ipsum dolor sit amet.'},
      { sender: { name: 'anna'}, contents: 'Lorem ipsum dolor sit amet.'},
      { sender: { name: 'mike'}, contents: 'Lorem ipsum dolor sit amet.'},
    ]
  }
  render() {
    const messages = this.state.messages.map((message, key) => <Message key={key} message={message}></Message>)
    return (
      <div className="App">
        <section className="messages-board">
          { messages }
        </section>
        <MessageForm></MessageForm>
      </div>
    );
  }
}

