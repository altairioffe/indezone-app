import React from 'react';

export default function Insights(props) {

  return(
    <article>
      <h4> Here is an analysis of your entries: </h4>
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