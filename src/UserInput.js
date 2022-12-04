import './App.css';
import { useEffect, useState } from 'react'
import { ChatBox } from './ChatBox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const UserInput = ({ setShowPostMessage }) => {
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const postMessageToServer = () => {
    const serverData = {
      author,
      message
    }
    fetch('https://shrouded-coast-47255.herokuapp.com/create-message', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST', body: JSON.stringify(serverData)
    })
      .then((response) => response.json())
      .then((data) => setShowPostMessage(false));

  }

  return (
    <div>
      <TextField onChange={(event) => handleAuthorChange(event)} id="outlined-basic" label="Author" variant="outlined" />
      <TextField onChange={(event) => handleMessageChange(event)} id="outlined-basic" label="Message" variant="outlined" />
      <br />
      <Button onClick={postMessageToServer} size="small">Save</Button>
    </div>
  )
}