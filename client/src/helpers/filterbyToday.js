// takes userGoals and filters by today
const filterByToday = (userGoals) => {
  const isToday = (date) => {
    const today = new Date();

    return (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    );
  };

  return userGoals.filter((userGoal) => {
    const date = new Date(userGoal.createdAt);
    return isToday(date);
  });
};

// returns array of goals that are answered
export const answeredGoals = (userGoals) => {

  return filterByToday(userGoals).map( (userGoal) => {
    return userGoal.goal_id;
  })
}

