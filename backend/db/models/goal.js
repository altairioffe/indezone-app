'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('goal', {
    question: DataTypes.STRING,
    suggestion: DataTypes.STRING
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};