import "./QuestionAnswer/styles.scss";

import React from "react";

import AnswerQuestionPanel from "./QuestionAnswer/AnswerQuestionPanel"

import Slide from '@material-ui/core/Slide';

export default function QuestionFeed(props) {
  const questionsList = 
    props.questions.map( (question, i) => {
      return(
        <div>
          <Slide direction="up" in={false} >
            <AnswerQuestionPanel 
              key={question.id}
              question={question.question}
              suggestion={question.suggestion}
              giveAnswer={props.giveAnswer}
              currentUserId={props.currentUserId}
            />
          </Slide>
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
