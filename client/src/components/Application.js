import React from 'react';
import Wall from './Wall';
import Bio from "./Bio/Index";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";

export default function Application() {
    
  const {
    ansQuestion,
    state,
    addUserGoal,
    setAnswer
  } = useApplicationData();
    
  const questionsArr = state.goals.map((goal) => goal.question);
  const bio = state.biodatas.filter((biodata) => biodata.user_id === state.currentUser);
  return (
    <main className="layout">
      <Navbar 
        users={ state.users }
      />
      <section className="feed">
        <hr/>
        <Bio 
          bio={bio}
        />
        <hr/>
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
          setAnswer = {setAnswer}
          addUserGoal = {addUserGoal}
          goals = {state.goals}
        />
        <hr />
        <div>
      <Wall userGoals={state.currentUserGoals} userId = {state.currentUser}/>
      </div>
      </section>
     </main>
  );
}