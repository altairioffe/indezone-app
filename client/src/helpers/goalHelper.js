// Finds previous user Goals ( All goals other than that of current day )
import moment from 'moment';
export function getPreviousUserGoals(userGoals, goals, currentDate, userId) {
  let previousGoals = userGoals.filter(userGoal => {
    return (moment(userGoal.createdAt).format('MM-DD-YYYY') < moment(currentDate).format('MM-DD-YYYY')) && (userGoal.user_id == userId);
  }
  );
  previousGoals = previousGoals.sort((goal1, goal2) => {
    if (moment(goal1.createdAt) < moment(goal2.createdAt)) {
      return 1;
    } else {
      return -1;
    }
  }
  );
  
  let expandedPreviousGoals = previousGoals.map((previousGoal) => {
    let expandedGoal = {};
    expandedGoal.createdAt = moment(previousGoal.createdAt).format('LLLL');  // Formatted date 
    expandedGoal.question = goals[previousGoal.goal_id].question;
    expandedGoal.answer = previousGoal.answer;
    return expandedGoal;

  });

  expandedPreviousGoals.sort((goal1, goal2) => goal1.createdAt > goal2.createdAt);
  return expandedPreviousGoals;

};