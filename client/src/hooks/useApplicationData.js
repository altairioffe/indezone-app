import axios from 'axios'; 
import {useState, useEffect } from "react";
export default function useApplicationData(){
   const [state,setState] = useState({
       userGoals:[],
       goals:[],
       biodatas:[],
       users:[]
   });

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
        console.log("useApplicationData")
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

   return { 
    ansQuestion,
    state
  };
}
