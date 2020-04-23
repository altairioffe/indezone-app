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

  //handleDelete
  // set user state
  const handleDelete = (id) => {
  console.log("id=",id);
  let userGoal = {};
  userGoal.id=id;
    axios
      .delete(`/api/userGoals`, {data:userGoal})
      .then((result) => {
        
        const newUserGoals = state.userGoals.filter(goal => goal.id !== id);
             
        setState((state) => ({
          ...state,
          userGoals: newUserGoals
          
        }));
      }
      )
      .catch((err) => console.log("error"))
}




  // Create new user 
  const createUser = function (email,password,biodata) {
    console.log("create user");
    const user = {};
    user.email = email;
    user.password = password;
   // user.biodata = biodata;
    user.handle = "@"+user.email.substring(0,3);
    user.points = 0;
    user.journalNo = 200;
    
    const biodataObj={};
    biodataObj.name=biodata;
    biodataObj.text=biodata;
    biodataObj.user_id=null;
    console.log("user=",user);
    
    axios
      .post(`/api/users`, user)
      .then((result) => {
        const newUsers = [
          ...state.users,
          result.data
        ];

        biodataObj.user_id = result.data.id;
        setState((state) => ({
          ...state,
          users: newUsers,
          currentUser: result.data.id
          
        }));

        console.log("biodataObj=",biodataObj);
        if(biodata !=null){
        axios
        .post(`/api/biodatas`, biodataObj)
        .then((result) => {
          const newBiodatas = [
            ...state.biodatas,
            result.data
          ];
  
        
          setState((state) => ({
            ...state,
            biodatas: newBiodatas,
           
            
          }));
  
  
          
         
          
        }
        )
        .catch((err) => console.log("error")
          
        )

      }
        
      }
      )
      .catch((err) => console.log("error")
        
      )

      
  };


 
  // set user state
  const logInUser = (email, password) => {
    console.log('in logged in user');
    const user = state.users.filter((user) => user.email === email && user.password === password)[0];
    if(user){
    setState({
      ...state,
      currentUser:user.id
    });
  }
  console.log("currentUser",state.currentUser);
  return user;
   // return state.currentUser;
}

// reset user state 
const logoutUser = () => {
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
    state,
    logInUser,
    logoutUser,
    setAnswer,
    addUserGoal,
    requestInsight,
    createUser,
    handleDelete

  };
}
