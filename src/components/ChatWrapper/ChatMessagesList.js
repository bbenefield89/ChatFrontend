import React, { Component } from 'react'

class ChatMessagesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    
    this.props.socket.on('RESP CHAT MESSAGE', messageData => {
      console.log(messageData)
      this.setState({
        messages: [
          ...this.state.messages,
          messageData
        ]
      })
    })
  }
  
  render() {
    return (
      <ul>
        {this.state.messages.map((message, index) => (
          <li key={ message.id }>
            { message.message }
          </li>
        ))}
      </ul>
    )
  }
}
 
export default ChatMessagesList