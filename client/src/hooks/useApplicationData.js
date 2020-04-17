import axios from 'axios'; 
import {useState, useEffect } from "react";
export default function useApplicationData(){
   const [state,setState] = useState({
       userGoals:[],
       goals:[]
   });

 useEffect(() => {
     Promise.all([
           axios.get('/api/userGoals'),
           axios.get('/api/goals')
     ]).then((all) => {
           setState((state) => ({...state,userGoals: all[0].data,goals:all[1].data}))
     })
     .catch(err => err.message);
   },[]); 

   return { state };
}
