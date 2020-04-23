import React from 'react';
import { TimelineEvent } from 'react-event-timeline';
import  {styles}  from './WallStyles';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function WallItem(props) {
 
  return (

    <TimelineEvent buttons={<Button onClick={() => props.handleDelete(props.id)}><DeleteIcon/></Button>} cardHeaderStyle = {styles.cardHeaderStyle} contentStyle={styles.contentStyle} container="card" bubbleStyle={styles.bubbleStyle} key={props.createdAt} title={props.question?props.question:""}
      createdAt={props.createdAt}
      icon={<i className="material-icons md-18"></i>}
    >
      <p>{props.answer}</p>
    </TimelineEvent>

  );

}