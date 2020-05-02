import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from "./Form"

const rnd = () => { //generates random number for color wheel
  return 175;
};


export default function SimpleExpansionPanel(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: `rgb(64,196,255)`,
      '& div': {
        backgroundColor: 'inherit'
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
      textAlign:'left',
      backgroundColor:'inherit',
      color:'white'
    },
  }));
  const classes = useStyles();

  return (
    <ExpansionPanel smUp="hide" className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading} fontSize="h2.fontSize">{props.question} </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails >
        <Typography className={classes.root}> 
          <Form 
            className={classes.heading, classes.root}
            setAnswer = {props.setAnswer}
            goal_id = {props.goal_id}
            addUserGoal = {props.addUserGoal}
            giveAnswer={props.giveAnswer}
            suggestion={props.suggestion}
            currentUserId={props.currentUserId}
            goalId={props.goalId}
          />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
