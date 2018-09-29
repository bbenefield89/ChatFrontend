import React, { Component } from 'react'

class ChatMessagesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.props.socket.on('RESP CHAT MESSAGE', message => {
      this.setState({ messages: [ ...this.state.messages, message ] })
    })
  }
  
  render() {
    return (
      <ul>
        {this.state.messages.map((message, index) => (
          <li key={ index * Date.now() }>
            { message }
          </li>
        ))}
      </ul>
    )
  }
}
 
export default ChatMessagesList