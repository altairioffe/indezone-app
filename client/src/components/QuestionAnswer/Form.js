import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

export default function Form(props){
  
  // below we update state
  const [ans, setAns] = useState() 
  
  //  cancel the form so form goes away
  const reset = () => {
    setAns(null);
  } 
  const cancel = () => {
    reset();
    // props.onCancel();
  }
  
  const getAns = () => {
    console.log("getAns", ans)
    return ans;
  }
  
  const submitSave = (ans) => {
    if(ans.trim().length === 0) {
      return; //validation
    }
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
          onChange={(e) => setAns(e.target.value)}
        />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => submitSave(ans)}
      >
      Answer
      </Button>
      </form>
    </main>
  );
}