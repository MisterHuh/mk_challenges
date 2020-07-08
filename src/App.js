import React, { useState }from 'react';
import './App.css';

import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    width: '25vw',
    padding: theme.spacing(4)
  },
  submit: {
    marginTop: theme.spacing(2)
  },
}));

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit= e => {
    e.preventDefault();

    const post = {
      firstName, lastName, email, messages
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessages("");
  }

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root}>

      <TextField id="" margin="normal" fullWidth variant="outlined" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      <TextField id="" margin="normal" fullWidth variant="outlined" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
      <TextField id="" margin="normal" fullWidth variant="outlined" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <TextField id="" margin="normal" fullWidth variant="outlined" placeholder="message" value={messages} onChange={e => setMessages(e.target.value)}/>

      <div>
        <Button type="submit" variant="contained" color="primary" className={classes.submit}>Submit</Button>
      </div>

    </form>
  )
}

export default App;
