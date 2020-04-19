import React from 'react';
import Wall from './Wall';
import Bio from "./Bio/Index";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";
import {getCurrentUserGoals} from '../helpers/goalHelper';


export default function Application() {
    
  const {
    loggedInUser,
    loggedOutUser,
    ansQuestion,
    state,
    requestInsight
  } = useApplicationData();
  console.log("------ state.currentUser ------\n", state.currentUser)

let questionsArr = state.goals.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
}) 
  
  const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

  let currentUserGoals = getCurrentUserGoals(state.userGoals, state.goals, state.currentUser)
  console.log("USERGOALS: ", currentUserGoals)
  return (
    <main className="layout">
      <Navbar 
        users={ state.users }
        logUser={ loggedInUser }
        logoutUser={ loggedOutUser }
        user={ state.currentUser }
      />
      {state.currentUser && (
      <section className="feed">
        <hr/>
        <Bio 
          bio={"[YOUR BIO]: describe the person you want to be"}
          level={10}
          requestInsight={requestInsight}
          currentUserGoals={currentUserGoals}
          userInsight={state.currentUserInsight}
        />
        <hr/>
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
        />
        <hr />
        <div>
      <Wall userGoals={currentUserGoals} userId = {state.currentUser}/>
      </div>
      </section>
      )} 
     </main>
  );
}