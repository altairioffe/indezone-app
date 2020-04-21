'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGoal = sequelize.define('user_goal', {
    goal_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,

    answer: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  UserGoal.associate = function(models) {
    // associations can be defined here
  };
  return UserGoal;
};