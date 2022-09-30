import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the messages once the user is logged in
        const authObject = { 'Project-ID': "3cc2f581-7459-4349-9179-70189b0f381a", 'User-Name': username, 'User-Secret': password }
        try {
            // We send the username and password to the server to verify the user and get the messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // If the user is verified, we store the username and password in the local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            // We reload the page to get the messages
            window.location.reload();

        } catch (error) {
            // If it doesn't work, we display an error message
            setError('Oops, incorrect credentials.');
        }
    }

  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="input"
                    placeholder="Username"
                    required
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input"
                    placeholder="Password"
                    required
                />

                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm