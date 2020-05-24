import React, { Component } from 'react';
import '../css/app.css';

import Message from './Message';

export default class MessageBoard extends Component {
  messagesEnd = null

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidUpdate = () => {
    this.scrollToBottom();
  }

  componentDidMount = () => {
    this.props.getMessages()
    this.scrollToBottom();
  }
  
  render() {
    console.log(this.props.messages)
    const messages = this.props.messages.messages.map((message, key) => (
      <Message key={key} message={message}></Message>
    ))

    return (
      <section className="messages-board">
        <div className="messages-board-inner">
          { messages }
          <div ref={(el) => { this.messagesEnd = el }}></div>
        </div>
      </section>
    );
  }
}

