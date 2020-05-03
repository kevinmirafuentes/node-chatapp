import React, { Component } from 'react';

import { Link } from "react-router-dom"

import '../css/home.css'

export default class App extends Component {
  render() {
    return (
      <div className="chatroom-links">
        <Link to="/xao2l0a2">
          Create a chatroom
        </Link>
        <Link to="/xao2l0a2">
          Join a chatroom
        </Link>
      </div>
    )
  }
}

