import React from 'react';
import WallItem from './WallItem';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import  {styles}  from './WallStyles';
import '../styles/Wall.scss';
export default function Wall(props) {
  const userGoals = props.userGoals;
  const userGoalsView = userGoals.map(userGoal => {
    return (
      <WallItem id={userGoal.id} key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.question} answer={userGoal.answer} handleDelete={props.handleDelete}/>
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