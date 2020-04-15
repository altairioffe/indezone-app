import { useState, useEffect } from "react";
import "components/Application.scss";
import axios from "axios";

export default function useApplicationData() {


  //  Promise all would wait for every request to fulfill this is where the state the initially updated (update these with routes to every table  in database)
  useEffect(() => {
    Promise.all([
      Promise.resolve(
        axios
          .get("http://localhost:8001/api/days")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("http://localhost:8001/api/appointments")
          .then(request => {
            return request.data;
          })
      ),
      Promise.resolve(
        axios
          .get("http://localhost:8001/api/interviewers")
          .then(request => {
            return request.data;
          })
      )
    ]).then( (all) => {
      // uncomment console.log() for testing 
      // please change table1, table2 etc... 
      // console.log(all[0],all[1], all[2]);
      setState(prev => ({ ...prev, table1: all[0], table2:all[1], table3: all[2] }));
    }).catch(e => console.log("there was a error"));
  }, []);

}