import React from 'react'

const ChatWrapper = props => {
  return (
    <React.Fragment>
      <ul id='messsages' />
      
      <form action=''>
        <input id='message_bar' autoComplete='off' />
        <button>Send</button>
      </form>
    </React.Fragment>
  );
}
 
export default ChatWrapper;