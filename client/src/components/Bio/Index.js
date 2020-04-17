import React, { useState, useEffect } from "react";

import Profile from './Profile';
import UserBio from './UserBio';
import Error from './Error';
import Insights from './Insights';

import useVisualMode from "../../hooks/useVisualMode";




  export default function Bio(props) {
  

    const USERBIO = "USERBIO";
    const INSIGHTS = "INSIGHTS";
    const LOADING = "LOADING";
    const EDIT = "EDIT";
    const DENIED = "DENIED";
  
    const level = 1
    const { mode, transition, back } = useVisualMode(USERBIO);



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
        bio={"Hi I love this app"}
        onClick={()=> transition(INSIGHTS)}

      />
    )}

    {mode === DENIED && (
      <Error 
        message={"Reach level 10 to access your insights!"}
        onCancel={back}
      />
    )}

    {mode === INSIGHTS && (
      <Insights 
        insights={"HERE ARE SOME INSIGHTS"}
        onCancel={back}
      />
    )}
    
    </section>

    </main>
    )
  }