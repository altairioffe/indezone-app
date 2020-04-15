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

    let ans = ""
    const getAns = () => {
        console.log("getAns", ans)
        return ans;
    }
    const setAns = (input) => {
        console.log("event", input)
        ans = input
    }
  
  return (
    <main className="prompt__card prompt__card--create">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <textarea
            className="prompt__create-input text--semi-bold"
            placeholder="Test form ✍"
            rows={5}
            onChange={ (e) => setAns(e.target.value)}
          />
        <section className="prompt__actions">
          <Button danger onClick={"cancel"}>Cancel</Button>
          <Button confirm onClick={ () => "save ans from form and display answer publicly" }>Public</Button>
          <Button warning onClick={ () =>  "save ans from form and display answer but only privately" }>Private</Button>

        <Button warning onClick={ () => console.log(getAns())}>Test</Button>
        </section>
        </form>     </main>
  );
}