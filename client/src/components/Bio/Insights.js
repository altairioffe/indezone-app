import React from 'react';
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

export default function Insights(props) {
  // Define Styles
  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 240, 230, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: "0 10px",
      textAlign:"center"
    },
  });
  const classes = useStyles();

  return(
    <article>
      <h2> Here is an analysis of your entries: </h2>
      <p style={{fontWeight:"bold"}}>{props.insights}</p>
      <Button
       className={classes.root}
       onClick={props.onCancel}
       disabled={props.disabled}>
         BACK
      </Button>
    </article>
  )
}