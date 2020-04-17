import React from 'react';
import { TimelineEvent } from 'react-event-timeline'
export default function WallItem(props) {
  return (

    <TimelineEvent key={props.createdAt} title={props.question}
      createdAt={props.createdAt}
      icon={<i className="material-icons md-18"></i>}
    >
      {props.answer}
    </TimelineEvent>


    /*  <div>
     <p>{props.createdAt}</p>
     <p>{props.question}</p>
     <p>{props.answer}</p>
     </div> */
  );

}