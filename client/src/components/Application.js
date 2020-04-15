import React from "react";
import Bio from "./Bio";
import QuestionFeed from "./QuestionFeed/index";
import Question from "./Question";
import "./Application.scss";
// import useApplicationData from "../hooks/useApplicationData";

const questionsArr = [
  "Someone who needs me on my A-game today is...",
  "A situation that might stress me out or trip me up today could be...",
  "If I was a high performance coach looking at my life from a high level, I would tell myself to remember that ... ... and the way that my best self would deal with that is... ",
  "The big progects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
  "The big projects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
  "I would know that today was a great success if at the end of the day I did, or felt this..."
];

const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

const questionsList = 
  questionsArr.map( (question, i) => {
    return(
      <Question
        key={i} 
        question={question}
        type={''}
        onEdit={()=>{}}
        onDelete={()=>{}}
      />
    )
  })

export default function Application(props) {
  // const {
  //   state,
  // } = useApplicationData();

  return (
    <main className="layout">
      <section className="feed">
        <hr/>
        <Bio 
          bio={bio}
        />
        <hr/>
        <QuestionFeed 
          questions={questionsArr}
        />
        <hr />
      </section>
    </main>
  );
}