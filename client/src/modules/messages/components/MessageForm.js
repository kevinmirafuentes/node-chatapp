import React, { Component } from 'react';

export default class MessageForm extends Component {
  render() {
    return (
      <section className="message-form">
        <div className="message-form-input">
          <textarea></textarea>
        </div>
        <div className="message-form-send">
          <button>Send</button>  
        </div>
      </section>
    );
  }
}
