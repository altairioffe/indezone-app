import React from 'react';

import Profile from './Profile';
import UserBio from './UserBio';
import UserBio from './UserBio';
import Error from './Error';
import Insights from './Insights';


  const USERBIO = "USERBIO";
  const INSIGHT = "INSIGHT";
  const LOADING = "LOADING";
  const EDIT = "EDIT";
  const DENIED = "DENIED";

  const { mode, transition, back } = useVisualMode(USERBIO);

  export default function Bio(props) {
  
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
        onClick={()=> level > 9 ? transition(INSIGHT) : transition(DENIED)}

      />
    )}

    {mode === DENIED && (
      <Error 
        message={"Reach level 10 to access your insights!"}
        onCancel={back}
      />
    )}

    {mode === INSIGHT && (
      <Insights 
        insight={state.insight}
        onCancel={back}
      />
    )}
    
    </section>

    </main>
    )
  }