import React from 'react';
import { TimelineEvent } from 'react-event-timeline';
import  {styles}  from './WallStyles';

export default function WallItem(props) {
 
  return (

    <TimelineEvent collapsible= { true } contentStyle={styles.contentStyle} container="card" bubbleStyle={styles.bubbleStyle} key={props.createdAt} title={props.question?props.question:""}
      createdAt={props.createdAt}
      icon={<i className="material-icons md-18"></i>}
    >
      <p>{props.answer}</p>
    </TimelineEvent>

  );

}