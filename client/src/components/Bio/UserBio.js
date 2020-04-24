import React from 'react';
import '../../styles/Bio.scss';
import {Button} from '@material-ui/core';
export default function UserBio(props) {

  return(
    <article className="user-bio">
    <p>{props.bio}</p>
    <Button 
       variant="contained" 
       color="secondary"
       onClick={props.onClick}
       disabled={props.disabled}>
         GET INSIGHTS
     </Button>
  </article>
  )
}