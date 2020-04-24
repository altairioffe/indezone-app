import React from 'react';
import {Button} from '@material-ui/core';
export default function Insights(props) {

  return(
    <article>
      <h4 className="insight-heading"> Here is an analysis of your entries: </h4>
      <p>{props.insights}</p>
      <Button 
      variant="contained" 
      color="secondary"
       className="button"
       onClick={props.onCancel}
       disabled={props.disabled}>
         BACK
     </Button>
    </article>
  )
}