import "./styles.scss";

import React from "react";

import Question from "../Question";
import QuestionAnswerForm from "./QuestionAnswerForm";


export default function QuestionFeed(props) {
  const questionsList = 
    props.questions.map( (question, i) => {
      return(
        <div>
          <br />
          <Question
            key={i} 
            question={question}
            type={''}
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
        </div>
      )
    })
  return  (
    <section>
      <h1>Question feed</h1>
      <hr/>
      {questionsList}
      <hr/>
      <Question 
        question={"One thing I can get excited about today is..."}
        type={''}
        onEdit={()=>{}}
        onDelete={()=>{}}
      />
      <QuestionAnswerForm />
      <br />
      <Question 
        question={"Someone who needs me on my A-game today is..."}
        onEdit={()=>{}}
        onDelete={()=>{}}
      />
      <hr/>
    </section>
  )
}

