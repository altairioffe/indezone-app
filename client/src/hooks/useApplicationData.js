import axios from 'axios';
import { useState, useEffect } from "react";
import { getCurrentUserGoals } from '../helpers/goalHelper';

export default function useApplicationData() {
  const [state, setState] = useState({
    userGoals: [],
    goals: [],
    biodatas: [],
    users: [],
    currentUserGoals: [],
    currentUser: null,
    answer: "",
    currentUserInsight: ""

  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/userGoals'),
      axios.get('/api/goals'),
      axios.get('/api/biodatas'),
      axios.get('/api/users')

    ]).then((all) => {
      setState((state) => ({
        ...state, userGoals: all[0].data, goals: all[1].data, biodatas: all[2].data,
        users: all[3].data
      }))
    })
      .catch(err => err.message);
  }, []);


  // Set current user goals 
  useEffect(() => {
    if (state.currentUser != null && state.userGoals != null) {
    setState((state) => ({
      ...state,
      currentUserGoals: getCurrentUserGoals(state.userGoals, state.goals, state.currentUser)
    }))
    console.log('currenyUserGoals', state.currentUserGoals);
  }
  }, [state.currentUser, state.userGoals]);


  // set Answer
  const setAnswer = function (ans) {
    setState((state) => ({
      ...state,
      answer: ans
    })
    );
    console.log("answer in state", state.answer);
  };


  // Adding new goal 
  const addUserGoal = function (goal) {
    goal.user_id = state.currentUser;
    goal.answer = state.answer;
    const goalId = goal.id;
    axios
      .post(`/api/userGoals`, goal)
      .then((result) => {
        const newUserGoals = [
          ...state.userGoals,
          result.data
        ];

     
        setState((state) => ({
          ...state,
          userGoals: newUserGoals
          
        }));
      }
      )
      .catch((err) => console.log("error"))

  };

  const ansQuestion = (answer, goal_id, user_id) => {

    let data = {
      user_id,
      goal_id,
      answer
    }

    return axios
      .post(`/api/userGoals`, data)
      .then( () => {

        setState({
          ...state
        });
        return;
      })
      .catch(() => {
        console.log('ERROR')
        return 'error'
      })
  }

  // set user state
  const loggedInUser = (user_id) => {
    setState({
      ...state,
      currentUser:user_id
    });
    return state.currentUser;
}

// reset user state 
const loggedOutUser = () => {
    setState({
      ...state,
      currentUser:null
    });
    return state.currentUser;
}



  const setInsight = currentUserInsight => setState({ ...state, currentUserInsight });
  
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
    ansQuestion,
    state,
    loggedInUser,
    loggedOutUser,
    setAnswer,
    addUserGoal,
    requestInsight

  };
}
