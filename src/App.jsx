import './App.css'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
     <ChatEngine 
        height="100vh"
        projectID="3cc2f581-7459-4349-9179-70189b0f381a"
        userName="Papaya"
        userSecret="Papaya123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
    </div>
  )
}

export default App
