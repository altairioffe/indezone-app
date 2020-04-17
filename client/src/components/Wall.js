import React from 'react';
import WallItem from './WallItem';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import  {styles}  from './WallStyles';
export default function Wall(props) {
  const userGoals = props.userGoals;
  const userGoalsView = userGoals.map(userGoal => {
    return (
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.question} answer={userGoal.answer} />
    );
  }
  );

  return (
    <div>
      <Timeline lineStyle={styles.lineStyle}>
        {userGoalsView}
      </Timeline>
    </div>
  );
}