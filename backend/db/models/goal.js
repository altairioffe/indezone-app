'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('goal', {
    question: DataTypes.TEXT,
    suggestion: DataTypes.TEXT
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};