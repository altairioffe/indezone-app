import React from 'react';
import Wall from './Wall';
import Bio from "./Bio/Index";
import LogoutPrompt from "./LogoutPrompt";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./LogoutPrompt.scss";
import useApplicationData from "../hooks/useApplicationData";
import {answeredGoals} from "../helpers/filterbyToday"
import {Container} from '@material-ui/core';
import "./Application.scss";

export default function Application() {
    
  const {
    logInUser,
    logoutUser,
    ansQuestion,
    state,
    requestInsight,
    addUserGoal,
    setAnswer,
    createUser,
    handleDelete
  } = useApplicationData();
  console.log("------ state ------\n", state)
  console.log("create user",createUser);
 

//const questionsArr = state.goals.map((goal) => goal.question);

  const bio = state.biodatas.filter((biodata) => biodata.user_id === state.currentUser)[0];
  const userObj = state.users.filter((user) => user.id === state.currentUser)[0];
  console.log("userObj", userObj);
  let level;
  if(userObj){
     level = userObj.points;
     console.log("level:",level);
  }

  console.log("level=",level);
  let filteredGoals = state.goals.slice(0,level);
  console.log("length:", filteredGoals.length);
  const questionsArr = filteredGoals.map((goal) => goal.question);
  console.log("questionsArr=",questionsArr.length);
//const questions = [...state.goals]
//let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
//let selectedQuestions = shuffledQuestions.slice(0, 3); //second is level
/* let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
})  */
  
console.log(answeredGoals(state.userGoals))
  //const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

  return (
    <main className="layout">
      <Navbar 
        users={ state.users }
        logInUser={ logInUser }
        logoutUser={ logoutUser }
        user={ state.currentUser }
        createUser = {createUser}
      />
      {state.currentUser && (
      <section className="feed">
        {/* <hr/> */}
       
        <Bio 
          bio={bio?bio.text:""}
          
          level={level}
          requestInsight={requestInsight}
          currentUserGoals={state.currentUserGoals}
          userInsight={state.currentUserInsight}
        />
       
        {/* <hr/> */}
        
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
          setAnswer = {setAnswer}
          addUserGoal = {addUserGoal}
          goals = {state.goals}
          currentUserId={state.currentUser}
          filteredGoals={filteredGoals}
          createUser = {createUser}
        />
        {/*<hr />*/}
        
      <Wall userGoals={state.currentUserGoals} userId = {state.currentUser} handleDelete={handleDelete}/>
     
      </section>
      )} 
      { state.currentUser === null && ( 
        <section>
      <Container>
          <h3 className="intro">Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together </h3>
          <hr className="seperator"/>
            <h4 className="text--regular intro-start">Please Log in to Start or Continue your Journey</h4>
      </Container>
      </section>
      )}
      
     </main>
  );
}