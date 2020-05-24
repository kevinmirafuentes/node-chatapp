import React, { Component } from 'react';

import '../css/join-chatroom.css'

export default class JoinChatroom extends Component {
  state = {
    name: ''
  }
  
  handleJoin = (event) => {
    this.props.joinChatroom(this.props.chatroom, this.state.name)
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <section className="join-chatroom">
        <input type="text" placeholder="Enter your name." value={this.state.name} onChange={ this.handleChange } />
        <button onClick={this.handleJoin}>Join</button>
      </section>
    );
  }
}

