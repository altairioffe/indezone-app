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
   console.log("Action:", action);
   if(action === "Login"){
    if(props.logInUser(email,password)){
     setLoggedIn(true);
     handleClose();
    }
  }else{
    console.log("IN else");
   props.createUser(email,password,biodata);
      setLoggedIn(true);
      handleClose();
  }
}

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
    <div>
<h4 disabled={true}>Welcome {email}</h4>
   <Button color="inherit"  onClick={(event) => handleClickOpen("Logout")}>LOGOUT</Button>
   </div>
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
      {!loggedIn && (
      <Container id="logo" maxWidth="sm md lg">
      <img height="40%px" width="70%" align="center" src="images/indezone-journal-hero.png" alt="INDEZONE" />
      </Container>
      )}

    </header>
  );

};