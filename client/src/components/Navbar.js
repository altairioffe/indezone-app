import "./QuestionAnswer/styles.scss";

import React, { useState } from "react";
import {Button, TextField, ButtonGroup} from '@material-ui/core';

export default function Navbar(props) {
  console.log("Navbar",{...props.users});
  const [loginState, SetLoginState] = useState(0);
  /* 
    State 0: Initial Login
      Login, Register, Email Field 
    State 1: Enter Password for Login
      Login, Back, Password Field
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  let password = "";
  const login = [{...props.users}].find( (user) => {
    // return user.email === submittedEmail ? true : false;
  })
  console.log("Loging in", [{...props.users}], login)


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
        label="Enter Email" 
        variant="outlined"
        color='primary'
        autoFocus='true'
        placeholder='example@email.com'
        type='email'
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
        onClick={() => console.log()}
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