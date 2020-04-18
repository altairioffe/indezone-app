import axios from 'axios'; 
import {useState, useEffect } from "react";
import {getPreviousUserGoals} from '../helpers/goalHelper';

//const currentUser = "6"; //temporary change 
  
//const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);

let sampleGoals = [{answer: "Be healthy"}, {answer: "Eat vegetables"}, {answer: "Read some books"}];

//console.log(sampleGoals)


export function requestInsight(userGoalsArray) {
  console.log("FROM WATSON HELPER IN FRONT END BEFORE API CALL: ", userGoalsArray)
return Promise.resolve(
  axios
    .post("/api/userGoals", {
      body: userGoalsArray
    })
    .then(response => {
      console.log("API CALL RESPONSE: ", response)
    })
  )
}

