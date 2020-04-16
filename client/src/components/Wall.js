import React from 'react';
import ReactDOM from 'react-dom';

import WallItem from './WallItem';
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
      {userGoalsView}
    </div>
  );
}