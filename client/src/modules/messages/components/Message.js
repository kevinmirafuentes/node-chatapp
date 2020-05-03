import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="message-sender">
          { this.props.message.sender.name }
        </div>
        <div className="message-body">
          { this.props.message.contents }
        </div>
      </div>
    );
  }
}