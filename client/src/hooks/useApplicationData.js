import axios from 'axios'; 
import {useState, useEffect } from "react";

export default function useApplicationData(){
   const [state,setState] = useState({
       userGoals:[],
       goals:[],
       biodatas:[],
       users:[],
       currentUser: null,
       currentUserInsight: ""
   });

   const setInsight = currentUserInsight => setState({ ...state, currentUserInsight });

 useEffect(() => {
     Promise.all([
           axios.get('/api/userGoals'),
           axios.get('/api/goals'),
           axios.get('/api/biodatas'),
           axios.get('/api/users')

     ]).then((all) => {
           setState((state) => ({...state,userGoals: all[0].data,goals:all[1].data,biodatas:all[2].data,
      users:all[3].data}))
     })
     .catch(err => err.message);
   },[]); 

  const ansQuestion = (ans) => {

    let answer =  {
        user_id:8,
        goal_id:1,
        answer: ans
    }
    
    return axios
      .post(`/api/userGoals`, answer)
      .then( () => {
        setState({
          ...state
        });
        return;
      })
      .catch( () => {
        console.log('ERROR')
        return 'error'
      })
  }

  const loggedInUser = (user_id) => {
        setState({
          ...state,
          currentUser:user_id
        });
        return state.currentUser;
  }

    const loggedOutUser = () => {
        setState({
          ...state,
          currentUser:null
        });
        return state.currentUser;
  }

  const requestInsight = (currentUserGoals) => {
   return Promise.resolve(
     axios
       .post("/api/userInsight", {
         body: currentUserGoals
       })
       .then(response => {
        setInsight(response.data)
       })
       .catch(err => console.log(err))
     )
   }
   return {
    loggedInUser,
    loggedOutUser,
    ansQuestion,
    requestInsight,
    state
  };
}
