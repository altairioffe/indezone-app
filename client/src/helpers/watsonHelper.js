import axios from 'axios'; 
// import {useState, useEffect } from "react";
// import {getPreviousUserGoals} from '../helpers/goalHelper';

//const currentUser = "6"; //temporary change 
  
//const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);

let sampleGoals = [{answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}];

//console.log(sampleGoals)


export function requestInsight(userGoalsArray) {
  console.log("FROM WATSON HELPER IN FRONT END BEFORE API CALL: ", userGoalsArray)
return Promise.resolve(
  axios
    .post("/api/userInsight", {
      body: userGoalsArray
    })
    .then(response => {
      console.log("API CALL RESPONSE: ", response)
    })
    .catch(err => console.log(err))
  )
}

