const MyMessage = ({ message }) => {
  // Check if the message is an image or text
  if(message?.attachments?.length > 0) {
    return (
      <img 
        // Get the first attachment
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    )
  }
  return (
    <div className="message" style={ {float: 'right', marginRight:'18px', color: 'white', backgroundColor: '#3B2A50'} }>
      {message.text}
    </div>
  )
}

export default MyMessage