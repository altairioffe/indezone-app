import moment from 'moment';
// Finds current user Goals 
export function getCurrentUserGoals(userGoals, goals, userId) {
  if (userId){
  return [...userGoals]
    .filter(userGoal => userGoal.user_id === userId)
    .sort((goal1, goal2) => moment(goal1.createdAt) < moment(goal2.createdAt) ? 1: -1)
    .map((userGoal) => (
      {
        id: userGoal.id,
        question: goals[userGoal.goal_id].question,
        answer: userGoal.answer,
        createdAt: moment(userGoal.createdAt).format('LLLL'),  // Formatted date 
      }
    ));
  }
};