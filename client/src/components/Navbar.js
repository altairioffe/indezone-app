import "./QuestionAnswer/styles.scss";

import React, { useState } from "react";
import { Button, TextField, Slide } from "@material-ui/core";

export default function Navbar(props) {
  // Here are the states to keep track of login process
  const [loginState, setLoginState] = useState(0);
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [user, setUser] = useState(props.user);
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
  };
  const inputLoginPassword = (password) => {
    return password;
  };

  // Validate password or email and adjust state accordingly
  const login = (formInput) => {
    if(loginState === 0){
      const validate = ([...props.users]).find((user) => {
        return user.email === formInput.trim() 
      })

      if(validate){
        setUser(validate);
        setLoginState(loginState + 1);
        return;       
      } else return
    }
    else {
      if(user.password === formInput.trim()){
        props.logUser(user);
        setUser(user);
        return setLoginState(loginState + 1);
      }
      else {
        return setLoginState(loginState);
      }
    }
  }
  
  const logout = () => {
    setUser(null);
    setLoginState(0);
    props.logoutUser();
  }

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
            
      <Slide direction="left" in={ loginState === 2} timeout={300}>
        <h2>Welcome {user ? user.handle.slice(1) : "error"}</h2>
      </Slide>
      <Slide direction="left" in={loginState === 0} timeout={300}>
        <TextField
          id="outlined-basic"
          name="emailInput"
          label="Enter Email"
          variant="outlined"
          color="primary"
          autoFocus="true"
          placeholder="example@email.com"
          type="email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </Slide>

      <Slide direction="left" in={loginState === 1} timeout={300}>
        <TextField
          id="outlined-basic"
          name="passwordInput"
          label="Enter Password"
          variant="outlined"
          color="primary"
          autoFocus="true"
          placeholder=""
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </Slide>
      {/* <Button variant="fob">logout</Button> */}
      <Slide direction="left" in={loginState === 1} timeout={300}>
        <Button
          onClick={() => setLoginState(loginState - 1)}
          variant="outlined"
          color="primary"
          size="large"
        >
          Back
        </Button>
      </Slide>
      <Slide direction="left" in={loginState === 0} timeout={300}>
        <Button
          onClick={"cancel"}
          variant="outlined"
          color="primary"
          size="large"
        >
          Register
        </Button>
      </Slide>
      <Slide direction="left" in={loginState === 0 || loginState === 1} timeout={300}>
        <Button
          onClick={() => { loginState === 0 ? 
            login(loginEmail) : login(loginPassword)
          }
        }
          variant="outlined"
          color="primary"
          size="large"
        >
          Login
        </Button>
      </Slide>
      <Slide direction="left" in={loginState === 2} timeout={300}>
        <Button
          onClick={() => logout()}
          variant="outlined"
          color="primary"
          size="large"
        >
          Logout
        </Button>
      </Slide>
    </header>
  );
}
