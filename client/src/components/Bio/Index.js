import React from 'react';



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
    
    </section>




    </main>
    )
  }