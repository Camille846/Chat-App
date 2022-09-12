import './App.css'
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <div className="App">
     <ChatEngine 
        height="100vh"
        projectID="977b5dd6-2715-4770-aa71-b50d5349e60a"
        userName="Maria"
        userSecret="Maria123"
     />
    </div>
  )
}

export default App
