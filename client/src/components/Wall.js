import React from 'react';

import WallItem from './WallItem';
import {Timeline, TimelineEvent} from 'react-event-timeline'
export default function Wall(props) {
  const userGoals = props.userGoals;
  const userGoalsView = userGoals.map(userGoal => {
    return (
      <Timeline key={userGoal.user_id}>
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.question} answer={userGoal.answer} />
      </Timeline>
    );
  }
  );

  return (
    <div>
      {userGoalsView}
    </div>
  );
}