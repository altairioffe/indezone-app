import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Form(props){
  
  const [ans, setAns] = useState();
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
  const classes = useStyles();
  return (
    <main >
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <TextField
          id="filled-textarea"
          label={props.suggestion}
          placeholder={props.suggestion}
          multiline
          fullWidth
          variant="filled"
          onChange={(e) => props.setAnswer(e.target.value)}
        />
      <Button
        className={classes.root}
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => props.addUserGoal({goal_id:props.goal_id})}
      >
      Answer
      </Button>
      </form>
    </main>
  );
}