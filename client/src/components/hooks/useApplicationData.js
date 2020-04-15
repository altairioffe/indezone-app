import { useState, useEffect } from "react";
// import "components/Application.scss"; //dont know what this line does
import axios from "axios";

export default function useApplicationData() {
  // here is where we set the state of the app using useState
  // state is a object created from the Prommise.all routes
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
        //example route
          .get("http://localhost:8001/api/user")
          .then(request => {
            // check if data is being passed
            console.log(request.data)
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("route to get request for table 2")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("route to get request for table and so on")
          .then(request => {
            return request.data;
          })
      )
    ]).then( (all) => {
      // uncomment console.log() for testing 
      // please change table1, table2 etc... 
      console.log({...all});
      setState(prev => ({ ...prev, table1: all[0], table2:all[1], table3: all[2] }));
    }).catch(e => console.log("there was a error"));
  }, []);

}