import React, { useState, useEffect } from "react";

import Profile from './Profile';
import UserBio from './UserBio';
import Error from './Error';
import Insights from './Insights';
import useVisualMode from "../../hooks/useVisualMode";
import { requestInsight}  from "../../helpers/watsonHelper";


let sampleGoals = [
{answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}, {answer: "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
}];

  export default function Bio(props) {

    const USERBIO = "USERBIO";
    const INSIGHTS = "INSIGHTS";
    const LOADING = "LOADING";
    const EDIT = "EDIT";
    const DENIED = "DENIED";
  
    const level = 10
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
        bio={"(Form for bio: Describe the person you want to be; i.e. I am friendly, confident, etc.)"}
        onClick={()=> {
         if (level > 9) { 
          // console.log("Clicked, before API call")
           requestInsight(sampleGoals)
           transition(INSIGHTS)
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