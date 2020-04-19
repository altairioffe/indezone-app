import React from 'react';
import WallItem from './WallItem';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import  {styles}  from './WallStyles';
import '../styles/Wall.scss';
export default function Wall(props) {
  const userGoals = props.userGoals;
  if (userGoals) { const userGoalsView = userGoals.map(userGoal => {
    return (
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.question} answer={userGoal.answer} />
    );
  }
  );


  return (
    <div class ="timeline">
      <Timeline lineStyle={styles.lineStyle}>
        {userGoalsView}
      </Timeline>
    </div>
  );
}
else 
return (
<WallItem question={"you need to log in"} />
)
}