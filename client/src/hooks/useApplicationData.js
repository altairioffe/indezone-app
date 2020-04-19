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
    currentUser: 6,
    answer: ""

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
    
    setState((state) => ({
      ...state,
      currentUserGoals: getCurrentUserGoals(state.userGoals, state.goals, state.currentUser)
    }))
    console.log('currenyUserGoals', state.currentUserGoals);
 
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


  const ansQuestion = (ans) => {

    let answer = {
      user_id: 8,
      goal_id: 1,
      answer: ans
    }

    return axios
      .post(`/api/userGoals`, answer)
      .then(() => {
        console.log("useApplicationData")
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

  return {
    ansQuestion,
    state,
    setAnswer,
    addUserGoal

  };
}
