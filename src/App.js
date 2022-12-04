import './App.css';
import { useEffect, useState } from 'react'
import { ChatBox } from './ChatBox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { UserInput } from './UserInput';


export const App = () => {
  const [showPostMessage, setShowPostMessage] = useState(false)
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Welcome to the Chat App!
        </p>
        <Button onClick={!showPostMessage ? () => setShowPostMessage(true) : () => setShowPostMessage(false)} size="small">{!showPostMessage ? "Post Message" : "Cancel"}</Button>
      </header>
      {
        showPostMessage ? <UserInput setShowPostMessage={setShowPostMessage} /> : <ChatBox />
      }
    </div>
  );
}

