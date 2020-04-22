import "./QuestionAnswer/styles.scss";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import { Button, TextField, Slide, AppBar, Tabs, Tab, TabPanel, Container, Toolbar, IconButton, Typography, useRadioGroup } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent,DialogContentText, DialogActions } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Navbar(props) {
  const classes = useStyles();
  // Here are the states to keep track of login process
  //const [loginState, setLoginState] = useState(0);
  //const [loginEmail, setLoginEmail] = useState(null);
  //const [loginPassword, setLoginPassword] = useState(null);
  //const [user, setUser] = useState(props.user);
  /* 
    State 0: Initial Login
      Login, Register, Email Field 
    State 1: Enter Password for Login
      Login, Back, Password Field
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  /*const inputLoginEmail = (email) => {
    return email;
  };
  const inputLoginPassword = (password) => {
    return password;
  };*/

  // Validate password or email and adjust state accordingly
  /*const login = (formInput) => {
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
  }*/
  
 /*  const logout = () => {
    setUser(null);
    setLoginState(0);
    props.logoutUser();
  } */

  
  const style = {

    background : "#03A9F4"
  };
  const [open, setOpen] = useState(false);
  const [action,setAction] = useState("");
  const [email,setEmail] = useState("");
  const [biodata,setBiodata] = useState("");
  const [password,setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("Login");
  const [register, setRegister] = useState("Register");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleClickOpen = (actionWord) => {
    setOpen(true);
    setAction(actionWord);
  };

  const handleClose = () => {
    setOpen(false);
  };

// Handle submit 
const handleSubmit = function(){
   console.log("props=",props);
   if(action === "login"){
    if(props.logInUser(email,password)){
     setLoggedIn(true);
     handleClose();
    }
  }else{
    if(props.createUser(email,password,biodata)){
    }
  }
};

// Handle Login Action
const handleLogin = function(){
   console.log("Login");
};

// Handle logut 
const handleLogout = function(){
  console.log("props=",props);
  props.logoutUser();
  setLoggedIn(false);
  handleClose();
   
};


// Handle Register Action 
const handleRegister = function(){
  console.log("Register");
};

  return (
    <header>
    
<AppBar position="static" style={style}> 
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <i class="fas fa-globe" aria-hidden="true"></i>
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    Indezone Journaling
    </Typography>
    {!loggedIn && (<div>
    <Button color="inherit" onClick={(event) => 
      handleClickOpen("Register")}
    >REGISTER</Button>
    <Button color="inherit" onClick={(event) => handleClickOpen("Login") }>LOGIN</Button>
   </div>
    )}
    {loggedIn && (
   <Button color="inherit"  onClick={(event) => handleClickOpen("Logout")}>LOGOUT</Button>
    )}
</Toolbar>
</AppBar>
{!loggedIn && (
<Dialog open={open} onClose={handleClose
} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{action}</DialogTitle>
        <DialogContent>
         {/*  <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange = {(e) => setEmail(e.target.value)}
          />
          <TextField
            
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            onChange = {(e) => setPassword(e.target.value)}
          />
          {action === "Register" && (
          <TextField
            
            margin="dense"
            id="name"
            label="Biodata(optional)"
            type="text"
            fullWidth
            onChange = {(e) => setBiodata(e.target.value)}
          />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(event) => handleSubmit(event)} color="primary">
           Submit
          </Button>
        </DialogActions>
      </Dialog>

        )}

{loggedIn && (
<Dialog open={open} onClose={handleClose
} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{action}</DialogTitle>
        <DialogContent>
        Do you want to logout ?
        </DialogContent>
        <DialogActions>
         
          <Button onClick={(event) => handleLogout()} color="primary">
           OK
          </Button>
        </DialogActions>
      </Dialog>
       )}
      <Container id="logo" maxWidth="sm md lg">
      <img height="40%px" width="70%" align="center" src="images/indezone-journal-hero.png" alt="INDEZONE" />
      </Container>

     {/*  <Slide direction="left" in={ loginState === 2} timeout={300}>
        <h2>Welcome {user && user.handle ? user.handle.slice(1) : "error"}</h2>
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
      {/* <Button variant="fob">logout</Button> }
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
      </Slide> */}
    </header>
  );
}
