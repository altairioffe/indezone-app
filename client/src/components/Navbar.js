import "./ComponentStyles/Navbar.scss";

import React, { useState } from "react";
import { Button, TextField, Grow, Box, Container, Slide } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function Navbar(props) {
// Define Styles
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 'none !important',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 240, 230, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "0 10px",
  },
});
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
        console.log(user)
        props.logUser(user.id);
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
  const classes = useStyles();
  return (
    
    <Box alignItems="center">
      <Container alignItems="center">
        <img src="images/indezone.png" alt="INDEZONE" />
      </Container>
      <Slide
        in={loginState === 0 || loginState === 1}
        timeout={500}
        unmountOnExit
        direction="right"
      >
        <Button
          onClick={() => {
            loginState === 0 ? login(loginEmail) : login(loginPassword);
          }}
          variant="contained"
          color="primary"
          size="large"
          className={classes.root}
        >
          Login
        </Button>
      </Slide>
      <Grow       
        in={loginState === 2}
        timeout={500}
        unmountOnExit
      >
        <span>
          Welcome <strong>{user && user.handle ? user.handle.slice(1) : "error"}</strong>
        </span>
      </Grow>
      <Grow
        
        in={loginState === 0}
        unmountOnExit
        timeout={500}
      >
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
      </Grow>

      <Grow     
        in={loginState === 1}
        timeout={500}
        unmountOnExit
      >
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
      </Grow>

      <Grow       
        in={loginState === 1}
        timeout={500}
        unmountOnExit
      >
        <Button
          onClick={() => setLoginState(loginState - 1)}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}
        >
          Back
        </Button>
      </Grow>
      <Slide
        direction="left"
        in={loginState === 0}
        timeout={500}
        unmountOnExit
      >
        <Button
          onClick={() => "cancel"}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}
        >
          Register
        </Button>
      </Slide>
 
      <Grow       
        in={loginState === 2}
        timeout={500}
        unmountOnExit
      >
        <Button
          onClick={() => logout()}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}
        >
          Logout
        </Button>
      </Grow>
    </Box>
  
  );
}
