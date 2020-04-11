'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGoal = sequelize.define('user_goal', {
    user_id: DataTypes.INTEGER,
    goal_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  UserGoal.associate = function(models) {
    // associations can be defined here
  };
  return UserGoal;
};