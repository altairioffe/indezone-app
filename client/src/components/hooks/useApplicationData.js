import { useState, useEffect } from "react";
// import "components/Application.scss"; //dont know what this line does
import axios from "axios";

export default function useApplicationData() {
  // here is where we set the state of the app using useState
  // state is a object created from the Prommise.all routes
  // use State comes from React (see line 1)
  const [state, setState] = useState({
    users: {},
    table1: {},
    table2: {}
  })

  //  Promise all would wait for every request to fulfill this is where the state the initially updated (update these with routes to every table  in database)
  useEffect(() => {
    Promise.all([
      Promise.resolve(
        axios
          .get("/api/users")
          .then(request => {
            console.log("check if data is being passed")
            console.log(request.data)
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
        userGoals: all[3]  
      }));
    }).catch(e => console.log("there was a error"));
  }, []);

}