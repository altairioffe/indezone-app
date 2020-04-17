import "./QuestionAnswer/styles.scss";

import React from "react";

import AnswerQuestionPanel from "./QuestionAnswer/AnswerQuestionPanel"

export default function QuestionFeed(props) {
  const questionsList = 
    props.questions.map( (question, i) => {
      return(
        <div>
          <AnswerQuestionPanel 
            key={i}
            question={question}
            giveAnswer={props.giveAnswer}
          />
          <br />
        </div>
      )
    })
  return  (
    <section>
      <h1>Question feed</h1>
      <hr/>
      {questionsList}
      <hr/>
    </section>
  )
}
