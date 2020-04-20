import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

export default function Form(props){
  
  // below we update state
  const [ans, setAns] = useState() 
  
  const submitSave = (ans) => {
    if(ans.trim().length === 0) {
      return; //validation
    }
    setAns(ans);
    console.log(props.goalId, props.userId)
    props.giveAnswer(ans, props.goalId, props.currentUserId)
      .then( (res) => {
        console.log("Something is happening", res)
        return;
      })
  }

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
          onChange={(e) => props.submitSave(e.target.value)}
        />
      <Button
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