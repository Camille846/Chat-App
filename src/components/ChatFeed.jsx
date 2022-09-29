import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;	

  // If chat exists, then find chats and the active chat
  const chat = chats && chats[activeChat];
  
  const renderReadReceipts = (message, isMyMessage) => {
    // Map the people who read the message
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div 
        key={`read_${index}`}
        className="read-receipt"
        style={{
          // If the message is from the current user, then the read receipt will be on the right
          float: isMyMessage ? "right" : "left",
          // the background image is the person's avatar
          // backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          // if the message was read by the current user, then the background image will be the user who read the message and the current user
          backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
        }}
      />
    ))
  }

  // Create component to be used for generating messages
  const renderMessages = () => {
    // Get the keys of the messages object 
    // The keys are the ids for specific messages
    // This made sure to take the keys from our messages and then put them right here
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      // Get the message object
      const message = messages[key];
      // Get the last message
      // If there are messages, make sure to get the last message
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
              // If it is my message, then render my message
              isMyMessage
              ? <MyMessage message={message} />
              // Otherwise, render their message
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? "0px" : "68px" }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    }
  )};

  // If there are no messages, then return loading
  if (!chat) return 'Loading...';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat?.title}
        </div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed