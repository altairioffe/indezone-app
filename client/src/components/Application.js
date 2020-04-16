import React from 'react';
import ReactDOM from 'react-dom';
import useApplicationData from '../hooks/useApplicationData';
import {getPreviousUserGoals} from '../helpers/selectors';
import Wall from './Wall';

export default function Application() {
    const {
    state
  } = useApplicationData();

  const currentUser = "6"; //temporary change 
  
  const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);
  
  return (
  
   <Wall key={currentUser} userGoals={previousUserGoals} userId = {currentUser}/>
  );

}