import React from 'react';

export default function Insights(props) {

  return(
    <article>
      <h3> Based on your entries, our analysis suggests that:  </h3>
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