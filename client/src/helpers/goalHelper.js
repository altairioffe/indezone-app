import moment from 'moment';
// Finds current user Goals 
export function getCurrentUserGoals(userGoals, goals, userId) {
    return [...userGoals]
    .filter(userGoal => userGoal.user_id === userId)
    .sort((goal1, goal2) => moment(goal1.createdAt) < moment(goal2.createdAt) ? 1: -1)
    .map((userGoal) => {
      const question = goals.filter((goal) => userGoal.goal_id === goal.id)[0].question;
    return  {
        id: userGoal.id,
        question: question,
        answer: userGoal.answer,
        createdAt: moment(userGoal.createdAt).format('LLLL'),  // Formatted date 
      }
    });
};