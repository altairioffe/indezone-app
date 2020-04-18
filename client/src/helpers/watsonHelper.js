import {getPreviousUserGoals} from '../helpers/goalHelper';

const currentUser = "6"; //temporary change 
  
const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);


Promise.resolve(
  axios
    .post("/api/userGoals", {
      body: previousUserGoals
    })
    .then(response => {
      console.log("API CALL RESPONSE: ", response)
    })
)