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
//let userLevel = getLevel(state.users, state.currentUser)
let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
let selectedQuestions = shuffledQuestions.slice(0, 10); //second is level
let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
}) 
  
  //const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

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
          answeredGoals={answeredGoals(state.userGoals)}
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