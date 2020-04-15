/* 
The Form component should track the following state:

    name:String
    user:Number

The Form component should have the following actions:

    setName:Function
    setUser:Function

The Form component should take the following props:

    onSave:Function
    onCancel:Function

// */

import React, { useState } from "react";
import Button from "../Button";

export default function QuestionAnswerForm(props){

// below we update state
// const [ans, setAns] = useState(props.name || '') 

//  cancel the form so prompt goes away
//   const cancel = () => {
//     reset();
//     props.onCancel();
//   }
//   const  submit = () => {

//   }
  
  return (
    <main className="prompt__card prompt__card--create">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <textarea
            className="prompt__create-input text--semi-bold"
            placeholder="Answer Question Here ✍"
            rows={5}
            onChange={ (e) => setAns(e.target.value)}
          />
        <section className="prompt__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={/* () => save ans from form and display answer publicly */}>Public</Button>
          <Button warning onClick={/* () =>  save ans from form and display answer but only privately */}>Private</Button>
        </section>
         <h4>{'render entered data here'}</h4>
        </form>     </main>
  );
}