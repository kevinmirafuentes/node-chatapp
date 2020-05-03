import React, { Component } from 'react';

import '../css/join-chatroom.css'

export default class JoinChatroom extends Component {
  handleLogin = () => {
    this.props.login()
  }
  
  render() {
    return (
      <section className="join-chatroom">
        <input type="text" placeholder="Enter your name." />
        <button onClick={this.handleLogin}>Join</button>
      </section>
    );
  }
}

