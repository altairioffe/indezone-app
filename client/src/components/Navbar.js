import "./QuestionAnswer/styles.scss";

import React, { useState } from "react";
import {Button, TextField} from '@material-ui/core';

export default function Navbar(props) {

  // Here are the states to keep track of login process
  const [loginState, setLoginState] = useState(0);
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  
  /* 
    State 0: Initial Login
      Login, Register, Email Field 
    State 1: Enter Password for Login
      Login, Back, Password Field
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  const inputLoginEmail = (email) => {
    return email;
  }
  const login = (loginEmail) => [...props.users].find( (user) => {
    console.log(loginEmail, user.email, user)
    return user.email === inputLoginEmail(loginEmail).trim() ? 
      true : false;
  })


  return (
    <header>
      <a href="/">
        <img src="images/indezone.png" alt="INDEZONE" />
        <i class="fas fa-globe" aria-hidden="true"></i>Journaling
      </a>

      <div>
        <a>Find Journey</a>
        <a>Find Others</a>
        <a>View Badges</a>
      </div>

      <TextField 
        id="outlined-basic"
        name="emailInput"
        label="Enter Email" 
        variant="outlined"
        color='primary'
        autoFocus='true'
        placeholder='example@email.com'
        type='email'
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <Button variant="fob">logout</Button>
      
      <Button 
        onClick={"cancel"}
        variant="outlined"
        color="primary"
        size="large"
      >
        Back
      </Button>
      <Button 
        onClick={"cancel"}
        variant="outlined"
        color="primary"
        size="large"
      >
        Register
      </Button>
      <Button 
        onClick={() => console.log(login(loginEmail))}
        variant="outlined"
        color="primary"
        size="large"
      >
        Login
      </Button>
      <Button 
        onClick={() => console.log()}
        variant="outlined"
        color="primary"
        size="large"
      >
        Logout
      </Button>
    
    </header>
  );
}