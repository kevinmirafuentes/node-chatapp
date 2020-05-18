import React, { Component } from 'react';

import { Redirect } from "react-router-dom"

import '../css/home.css'

export default class App extends Component {
  state = {
    chatroomLink: false
  }

  handleCreateChatroom = () => {
    this.props.createChatroom()
  }

  render() {
    console.log(this.props.chatroom)
    if (this.props.chatroom._id) {
      return <Redirect to={`/${this.props.chatroom._id}`} />
    }
    return (
      <div className="chatroom-links">
        <button onClick={this.handleCreateChatroom}>Create a chatroom</button>
        <button>Join a chatroom</button>
      </div>
    )
  }
}

