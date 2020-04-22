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

  const questionsList = 
    props.goals.map( (goal, i) => {
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
        </div>
      )
    })
  return  (
    <section>
      <h1 className={classes.root}>Daily Question Feed <small>Write Entries Here</small></h1>
      <br/>
      {questionsList}
      <br/>
    </section>
  )
}