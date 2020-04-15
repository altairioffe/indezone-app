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

//  cancel the form so form goes away

    const reset = () => {
        setAns('');
        // setAnsForQuestion=null
    } 
    const cancel = () => {
        reset();
        // props.onCancel();
    }
//   const  submit = () => {

//   }

    let ans = ""
    const setAns = (input) => {
        console.log("event", input)
        ans += input 
        console.log(ans)
        return ans
    }
  
  return (
    <main className="prompt__card prompt__card--create">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <textarea
            className="prompt__create-input text--semi-bold"
            placeholder="Test form ✍"
            rows={5}
            onKeyPress={ (e) => setAns(e.target.value)}
          />
        <section className="prompt__actions">
          <Button danger onClick={"cancel"}>Cancel</Button>
          <Button confirm onClick={ () => "save ans from form and display answer publicly" }>Public</Button>
          <Button warning onClick={ () =>  "save ans from form and display answer but only privately" }>Private</Button>
        </section>
         <h4>{setAns(ans)}</h4>
        </form>     </main>
  );
}