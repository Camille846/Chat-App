import './App.css'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
     <ChatEngine 
        height="100vh"
        projectID="3cc2f581-7459-4349-9179-70189b0f381a"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
    </div>
  )
}

export default App
