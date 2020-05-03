import React, { Component } from 'react';

export default class Message extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSubmit(text)
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <input type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
       />
    );
  }
}