import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const rnd = () => { //generates random number for color wheel
  return Math.floor(Math.random() * (365 - 0 + 1) + 0);
};

export default function Status(props) {
    const useStyles = makeStyles((theme) => ({
      root: {
        textAlign:'left',
        fontSize: '1em', 
        color: `hsl(${rnd()}deg, 100%, 50%)`,
        "& img" : {
          height: '1.1em'
        }
      }
    }));
  const classes = useStyles();
  return (
  
  <span className={classes.root}>
    <img src="images/redpill.png" alt="INDEZONE" />
    {props.insight}
  </span>
  

  );
}