import React from 'react';
import './App.css';

import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
    width: 200,
    border: '1px solid black'
  }
}));

function App() {
  const classes = useStyles;
  return (
    <form className={classes.root}>

      <TextField id="" margin="normal" variant="outlined" label="first name" />
      <TextField id="" margin="normal" variant="outlined" label="last name" />
      <TextField id="" margin="normal" fullWidth variant="outlined" label="email" />
      <TextField id="" margin="normal" fullWidth variant="outlined" label="message" />
      <div>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </div>

    </form>

  );
}

export default App;
