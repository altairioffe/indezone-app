import "./QuestionAnswer/styles.scss";

import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Button } from "@material-ui/core";
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
  const questionsFilteredList = props.questions
    .map( (goal, i) => {
      return(
        <div>
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
        </div>
      )
    })
  return  (
    <section>
      <h1 className={classes.root}>Daily Question Feed <small>Write Entries Here</small></h1>
      <br/>
      {questionsFilteredList}
      {!questionsFilteredList.length === 0 && (
    <Card className={classes.root} variant="contained-primary">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Congratulations
        </Typography>
        <Typography variant="h5" component="h2">
          You have Answered all your Questions for the Day 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Come Back Tommorrow for More
        </Typography>
        <Typography variant="body2" component="p">
          Raise your Level to get more Questions
        </Typography>
      </CardContent>
    </Card>
  )
}
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