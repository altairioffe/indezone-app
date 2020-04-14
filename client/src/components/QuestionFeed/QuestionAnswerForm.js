/* 
The Form component should track the following state:

    name:String
    interviewer:Number

The Form component should have the following actions:

    setName:Function
    setInterviewer:Function

The Form component should take the following props:

    onSave:Function
    onCancel:Function

*/

import React, { useState } from "react";
import Button from "../Button";

export default function QuestionAnswerForm(props){

  // two states defined in Form
  const [name, setName] = useState(props.name || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset = () => {
    setName('');
    setInterviewer(null);
  } 
  const cancel = () => {
    reset();
    props.onCancel();
  }
  
  return (
    <main className="prompt__card prompt__card--create">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <textarea
            className="prompt__create-input text--semi-bold"
            name="name"
            placeholder="Answer Question Here ✍"
            rows={5}
            onKeyPress={ () => {} }
          />
        </form>
        <section className="prompt__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(name, interviewer)}>Public</Button>
          <Button warning onClick={() => props.onSave(name, interviewer)}>Private</Button>
        </section>
    </main>
  );
}