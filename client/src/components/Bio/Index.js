import React, { useState, useEffect } from "react";

import Profile from './Profile';
import UserBio from './UserBio';
import Error from './Error';
import Insights from './Insights';
import Status from './Loading';
import useVisualMode from "../../hooks/useVisualMode";


  export default function Bio(props) {

    const USERBIO = "USERBIO";
    const INSIGHTS = "INSIGHTS";
    const LOADING = "LOADING";
    const EDIT = "EDIT";
    const DENIED = "DENIED";
    const ERROR = "ERROR";
  
    const level = 10
    const { mode, transition, back } = useVisualMode(USERBIO);


    const loadInsight = () => {
      
        props.requestInsight()
        .then(()=> {
          transition(INSIGHTS)
        })
        .catch(error => transition(ERROR))

    }

    
    return(

    <main>
    <section>
      <Profile 
      username={"Linda"}
      level={level}
      />
    </section>

    <section>

    {mode === USERBIO && (
      <UserBio 
        bio={"(Form for bio: Describe the person you want to be; i.e. I am friendly, confident, etc.)"}
        onClick={()=>  {
          if (level > 9) {
          loadInsight()
          transition(LOADING)
        } else {
          transition(DENIED)
        }
        }} 

      />
    )}

    {mode === DENIED && (
      <Error 
        message={"Reach level 10 to access your insights!"}
        onCancel={back}
      />
    )}

    {mode === ERROR && (
      <Error 
        message={"Unable to load insights! Make sure you are providing enough data for an analysis by writing complete sentences!"}
        onCancel={back}
      />
    )}

    {mode === LOADING && (
      <Status 
        message={"Loading insights!"}
        onCancel={back}
      />
    )}

    {mode === INSIGHTS && (
      <Insights 
        insights={props.userInsight}
        onCancel={back}
      />
    )}
    
    </section>

    </main>
    )
  }