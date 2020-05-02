import React from 'react';
import Wall from './Wall';
import Bio from "./Bio/Index";
import LogoutPrompt from "./LogoutPrompt";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./LogoutPrompt.scss";
import useApplicationData from "../hooks/useApplicationData";
import {answeredGoals} from "../helpers/filterbyToday"
import { Button, TextField, Slide, Divider, Container } from "@material-ui/core";

export default function Application() {
    
  const {
    loggedInUser,
    loggedOutUser,
    ansQuestion,
    state,
    requestInsight,
    addUserGoal,
    setAnswer
    } = useApplicationData();
  console.log("------ state ------\n", state)



//const questionsArr = state.goals.map((goal) => goal.question);


const getBio = (biodatas, currentUser) => {
  let bio = biodatas.filter((biodata) => biodata.user_id === currentUser);
  console.log("BIO: ", bio)
  return bio[0].text
}


const questions = [...state.goals]
let selectedQuestions = questions.slice(0, state.currentUserLevel); //second is level
let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
}) 
  
  return (
    <Container className="layout">
      
    <Navbar 
      users={ state.users }
      logUser={ loggedInUser }
      logoutUser={ loggedOutUser }
      user={ state.currentUser }
    />
    

      {state.currentUser && (
      <section className="feed">
        <br />
        <Bio 
          bio={getBio(state.biodatas, state.currentUser)}
          
          level={state.currentUserLevel}
          requestInsight={requestInsight}
          currentUserGoals={state.currentUserGoals}
          userInsight={state.currentUserInsight}
        />
        <br />
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
          setAnswer = {setAnswer}
          addUserGoal = {addUserGoal}
          goals = {state.goals}
          currentUserId={state.currentUser}
          answeredGoals={answeredGoals(state.userGoals, state.currentUser)}
          // recently updated answer has no id only in database is it assigned a id
          currentAns={state.userGoals[0].id ? false : state.userGoals[0].goal_id}
        />
        <div>
      <Wall userGoals={state.currentUserGoals} userId = {state.currentUser}/>
      </div>
      </section>
      )} 
      { state.currentUser === null && ( 
        <div>
          <LogoutPrompt />
        </div> 
      )}

     </Container>
  );
}