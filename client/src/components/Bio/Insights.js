import React from 'react';

export default function Insights(props) {

  return(
    <article>
      <h1>SOME INSIGHTS: </h1>
      <p>{props.insights}</p>
      <button 
       className=""
       onClick={props.onCancel}
       disabled={props.disabled}>
         BACK
     </button>
    </article>
  )
}