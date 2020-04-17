import React from 'react';



  const USERBIO = "USERBIO";
  const INSIGHT = "INSIGHT";
  const LOADING = "LOADING";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(USERBIO);

  export default function Bio(props) {
  
    return(
      <Profile 
      username={"Linda"}
      level={level}
      onClick={()=>alert(("clicked!"))}
      bio={"Hi I love this app"}
      />
    )
  }