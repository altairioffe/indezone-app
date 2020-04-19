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
  
    const level = 10
    const { mode, transition, back } = useVisualMode(USERBIO);


    const loadInsight = () => {
      console.log("CLICKED!")
      if (level > 9) {
        props.requestInsight()
        .then(()=> {
          console.log("TRANSITIONING INSIGHTS: ", props.currentUserInsight)
          transition(INSIGHTS)
        })
        .catch(error => transition(DENIED))
        
      } else {
        transition(DENIED)
      }

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
          loadInsight()
          transition(LOADING)
        }}

      />
    )}

    {mode === DENIED && (
      <Error 
        message={"Reach level 10 to access your insights!"}
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