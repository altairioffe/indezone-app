import React from 'react';

export default function UserBio(props) {

  return(
    <article className="">
    <p>{props.bio}</p>
    <button 
       className=""
       onClick={props.onClick}
       disabled={props.disabled}>
         GET INSIGHTS
     </button>
  </article>
  )
}