import React from 'react';
import Wall from './Wall';
import Bio from "./Bio/Index";
import LogoutPrompt from "./LogoutPrompt";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./LogoutPrompt.scss";
import useApplicationData from "../hooks/useApplicationData";

export default function Application() {
    
  const {
    loggedInUser,
    loggedOutUser,
    ansQuestion,
    state
  } = useApplicationData();
  console.log("------ state ------\n", state)

const questions = [...state.goals]
const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
const selectedQuestions = shuffledQuestions.slice(0, 3);

let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
}) 
  
  const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

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
          bio={bio}
        />
        <hr/>
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
          currentUserId={state.currentUser}
        />
        <hr />
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

     </main>
  );
}