import React, { Component } from 'react';
import MessageInput from './MessageInput'

export default class MessageForm extends Component {
  handleSubmit = text => {
    this.props.addMessage({
      sender: { name: 'john' },
      contents: text,
    })
  }

  render() {
    return (
      <section className="message-form">
        <div className="message-form-input">
          <MessageInput onSubmit={ this.handleSubmit }></MessageInput>
        </div>
        <div className="message-form-send">
          <button>Send</button>  
        </div>
      </section>
    );
  }
}
