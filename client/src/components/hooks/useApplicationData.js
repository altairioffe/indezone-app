import { useState, useEffect } from "react";
import {getTodayDate} from "../../helpers/selectors"
import axios from "axios";

export default function useApplicationData() {
  // here is where we set the state of the app using useState
  // state is a object created from the Prommise.all routes
  // use State comes from React (see line 1)
  const [state, setState] = useState({
    today: {}, 
    users: {},
    goals: {},
    biodatas: {},
    userGoals: {}
  });

  //  Promise all would wait for every request to fulfill this is where the state the initially updated (update these with routes to every table  in database)
  useEffect(() => {
    Promise.all([
      Promise.resolve(
        axios
          .get("/api/users")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("/api/goals")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("/api/biodatas")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("/api/userGoals")
          .then(request => {
            return request.data;
          })
      )
    ]).then( (all) => {
      // uncomment console.log() for testing 
      // once requests are done we have all the data in state
      console.log({...all});
      setState(prev => ({ 
        ...prev, 
        users: all[0], 
        goals:all[1], 
        biodatas: all[2], 
        userGoals: all[3], 
        today: getTodayDate()
      }));
    }).catch(e => console.log("there was a error"));
  }, []);

  //  ------- SET STATE and UPDATE DB FUNCTIONS (for export) ----

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


  // object to return 
  return {
    ansQuestion,
    state
  }

}