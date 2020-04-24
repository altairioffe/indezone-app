import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from "./Form"
import '../../styles/questionAnswer.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <ExpansionPanel smUp="hide" className="expansion">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{props.question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails >
        <Typography> 
          <Form 
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
