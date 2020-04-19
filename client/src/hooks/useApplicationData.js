import axios from 'axios'; 
import {useState, useEffect } from "react";
import {getCurrentUserGoals} from '../helpers/goalHelper';

export default function useApplicationData(){
   const [state,setState] = useState({
       userGoals:[],
       goals:[],
       biodatas:[],
       users:[],
       currentUserGoals:[],
       currentUser: 8,
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

  useEffect(() =>{
    setState((state) => ({
      ...state,
      currentUserGoals: getCurrentUserGoals(state.userGoals, state.goals, state.currentUser)
    }))
  },[state.currentUser, state.userGoals]);

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

  const requestInsight = () => {
   return Promise.resolve(
     axios
       .post("/api/userInsight", {
         body: state.currentUserGoals
       })
       .then(response => {
        setInsight(response.data)
       })
       .catch(err => console.log(err))
     )
   }

   return { 
    ansQuestion,
    state,
    requestInsight
  };
}
