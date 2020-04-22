import "./QuestionAnswer/styles.scss";

import React, { useState } from "react"

import AnswerQuestionPanel from "./QuestionAnswer/AnswerQuestionPanel"

import Slide from '@material-ui/core/Slide';


export default function QuestionFeed(props) {
  const questionsList = 
    props.questions.map( (goal, i) => {
      console.log(goal.id)
      console.log(props.answeredGoals.find( (id) => id === goal.id))
      return(
        <div>
      { !props.answeredGoals.find( (id) => id === goal.id) && ( 
          <Slide direction="up" in={false} >
            <AnswerQuestionPanel 
              key={i}
              question={goal.question}
              suggestion={goal.suggestion}
              giveAnswer={props.giveAnswer}
              setAnswer = {props.setAnswer}
              goal_id = {goal.id}
              addUserGoal = {props.addUserGoal}
              currentUserId={props.currentUserId}
            />
          </Slide>
      )}
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

{/* 
question={question.question}
              suggestion={question.suggestion}
              giveAnswer={props.giveAnswer}
              currentUserId={props.currentUserId}
              goalId={question.id} */}