import "./QuestionAnswer/styles.scss";

import React, { useState } from "react";
import { Button, TextField, Slide, Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function Navbar(props) {
  // Define Styles
  const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, skyblue  5%, #50ABE4 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 240, 230, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
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
    
    <Grid spaceing={10}>
      <Container>
        <img src="images/indezone.png" alt="INDEZONE" />
      </Container>
            <Slide
        direction="left"
        in={loginState === 0 || loginState === 1}
        timeout={300}
        unmountOnExit
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
      <Slide
        direction="left"
        in={loginState === 2}
        timeout={300}
        unmountOnExit
      >
        <span>
          Welcome {user && user.handle ? user.handle.slice(1) : "error"}
        </span>
      </Slide>
      <Slide
        direction="left"
        in={loginState === 0}
        unmountOnExit
        timeout={300}
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
      </Slide>

      <Slide
        direction="left"
        in={loginState === 1}
        timeout={300}
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
      </Slide>

      <Slide
        direction="left"
        in={loginState === 1}
        timeout={300}
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
      </Slide>
      <Slide
        direction="left"
        in={loginState === 0}
        timeout={300}
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
 
      <Slide
        direction="left"
        in={loginState === 2}
        timeout={300}
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
      </Slide>
    </Grid>
  
  );
}
