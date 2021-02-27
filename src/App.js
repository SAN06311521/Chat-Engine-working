import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />; //if there is no username

    return (
        <ChatEngine 
            height = "100vh"
            projectID = "db961dd8-86ee-43ec-bab8-d08b3494a626"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;