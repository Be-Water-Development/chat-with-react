import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';

export const ChatBox = () => {
  // const [count, setCount] = useState(0);
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    fetch('https://shrouded-coast-47255.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const refetchMessages = () => {
    fetch('https://shrouded-coast-47255.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }

  const deleteSingularMessage = (id) => {
    console.log("FIRED DELETE")
    fetch('http://shrouded-coast-47255.herokuapp.com/delete-message', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'DELETE', body: JSON.stringify({ id })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          refetchMessages()
        }
      });
  }

  const Messages = messages?.map(m => {
    const { _id, author, message } = m
    return (
      <Card key={_id} sx={{ width: '50%', marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5" >
            {message}
          </Typography>
          <Typography variant="body2" component="div">
            {author}
          </Typography>
        </CardContent>
        <div className='btn-container'>
          <Button onClick={() => { alert(_id) }} size="small">Get Message ID</Button>
          <Button onClick={() => deleteSingularMessage(_id)} size="small" variant="outlined" color="error">Delete</Button>
        </div>
      </Card>
    )
  })

  return (
    <div className='messages-container'>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      {Messages}
    </div>
  );
}

