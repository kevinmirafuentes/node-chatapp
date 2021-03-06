import React, { Component } from 'react';

import MessageForm from '../containers/MessageForm'
import MessageBoard from '../containers/MessageBoard'
import JoinChatroom from '../containers/JoinChatroom'

export default class Chatroom extends Component {
  componentDidMount() {
    this.props.loadChatroom(this.props.match.params.chatroom)
  }

  render() {
    if (!this.props.auth) {
      return (
        <div>
          <JoinChatroom />
        </div>
      )
    }

    return (
      <div>
        <MessageBoard />
        <MessageForm />
      </div>
    )
  }
}

