import axios from 'axios'; 
// import {useState, useEffect } from "react";
// import {getPreviousUserGoals} from '../helpers/goalHelper';

//const currentUser = "6"; //temporary change 
  
//const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);


// DEBUGGING :
//console.log(sampleGoals)


export function requestInsight(userGoalsArray) {
 // DEBUGGING : 
 //console.log("FROM WATSON HELPER IN FRONT END BEFORE API CALL: ", userGoalsArray) 
return Promise.resolve(
  axios
    .post("/api/userInsight", {
      body: userGoalsArray
    })
    .then(response => {
  //  DEBUGGING :  
  //console.log("API CALL RESPONSE: ", response) 
    return response
    })
    .catch(err => console.log(err))
  )
}

