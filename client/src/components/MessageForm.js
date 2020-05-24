import React, { Component } from 'react';

export default class MessageForm extends Component {
  state = {
    message: ''
  }

  handleMessageChange = event => {
    this.setState({message: event.target.value})
  }

  handleMessageKeyDown = event => {
    if (!event.ctrlKey && event.keyCode === 13) {
      this.handleSubmit()
      event.preventDefault()
    }
    if (event.ctrlKey && event.keyCode === 13)
      this.setState({message: event.target.value + "\n"})
  }

  handleSubmit = () => {
    this.setState({message: ''})

    if (this.state.message.trim() === '') 
      return

    this.props.addMessage({
      sender: this.props.auth,
      contents: this.state.message,
    })
    this.props.runMessageQueue()
  }

  render() {
    return (
      <section className="message-form">
        <div className="message-form-input">
          <textarea 
            placeholder="Type message here." 
            value={this.state.message} 
            onChange={this.handleMessageChange}
            onKeyDown={this.handleMessageKeyDown}></textarea>
        </div>
        <div className="message-form-send">
          <button onClick={this.handleSubmit}>Send</button>  
        </div>
      </section>
    );
  }
}
