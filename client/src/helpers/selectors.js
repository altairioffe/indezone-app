// Finds previous user Goals ( All goals other than that of current day )
import moment from 'moment';
export function getPreviousUserGoals(userGoals, goals, currentDate, userId) {
  
  const previousGoals = userGoals.filter(userGoal => {
    return (moment(userGoal.createdAt).format('MM-DD-YYYY') < moment(currentDate).format('MM-DD-YYYY')) && (userGoal.user_id === userId);
  }
  );

  let expandedPreviousGoals = previousGoals.map((previousGoal) => {
        let expandedGoal = {};
        expandedGoal.createdAt = previousGoal.createdAt;
        expandedGoal.question = goals[previousGoal.goal_id].question;
        expandedGoal.answer = previousGoal.answer;
        return expandedGoal;
        
  });
  return expandedPreviousGoals;

};