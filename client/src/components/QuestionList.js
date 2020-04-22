import "./QuestionAnswer/styles.scss";

import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import AnswerQuestionPanel from "./QuestionAnswer/AnswerQuestionPanel"

import Slide from '@material-ui/core/Slide';

export default function QuestionFeed(props) {
   const useStyles = makeStyles((theme) => ({
    root: {
      textAlign:'left',
      fontSize: '1.5em', 
      "& small": {
        color:"skyblue"
      }
    }
  }));
  const classes = useStyles();
  
  console.log('questions for user',props.questions)
  console.log('questions answered today', props.answeredGoals)
  const questionsFilteredList = props.questions.slice(props.answeredGoals.length)
    .filter( (question) => {
    return props.answeredGoals.find( (id) => id === question.id) ? false : true;
  }).map( (goal, i) => {
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
        </div>
      )
    })
  return  (
    <section>
      <h1 className={classes.root}>Daily Question Feed <small>Write Entries Here</small></h1>
      <br/>
      {questionsFilteredList}
      <br/>
    </section>
  )
}

/* let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
})  */