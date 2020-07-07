import React from 'react';
import './App.css';

import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     // height: '100vh',
//     width: 200,
//     border: '1px solid black'
//   }
// }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      messages: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      firstName: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      messages: this.state.messages
    };

    console.log("post is: ", post);
  };

  render() {

    // const classes = useStyles();

    return(
      // <form className={classes.root}>
      <form className="" onSubmit={this.onSubmit}>

        <TextField id="" name="firstName" onChange={this.onChange} margin="normal" variant="outlined" label="first name" />
        <TextField id="" name="lastName" onChange={this.onChange} margin="normal" variant="outlined" label="last name" />
        <TextField id="" name="email" onChange={this.onChange} margin="normal" fullWidth variant="outlined" label="email" />
        <TextField id="" name="messages" onChange={this.onChange} margin="normal" fullWidth variant="outlined" label="message" />
        <div>
          <Button type="submit"  variant="contained" color="inherit">Submit</Button>
        </div>

      </form>
    )
  }
}

export default App;


// function App() {
//   const classes = useStyles;
//   return (
//     <form className={classes.root}>

//       <TextField id="" margin="normal" variant="outlined" label="first name" />
//       <TextField id="" margin="normal" variant="outlined" label="last name" />
//       <TextField id="" margin="normal" fullWidth variant="outlined" label="email" />
//       <TextField id="" margin="normal" fullWidth variant="outlined" label="message" />
//       <div>
//         <Button type="submit" variant="contained" color="primary">Submit</Button>
//       </div>

//     </form>

//   );
// }

// export default App;
