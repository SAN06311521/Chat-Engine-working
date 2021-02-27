import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = { 'Project-ID': "db961dd8-86ee-43ec-bab8-d08b3494a626", 'User-Name': username, 'User-Secret': password };

    try {
        //username/password -> chatengine - give msg..
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

        //works-out -> logged in (store in local)

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload(); //for reload
      setError('');
    } catch (error) {
        //doesn't give -> error
      setError('Oops, try again :)');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start here!</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;