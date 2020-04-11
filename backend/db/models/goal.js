'use strict';
module.exports = (sequelize, DataTypes) => {
  const goal = sequelize.define('goal', {
    question: DataTypes.STRING,
    suggestion: DataTypes.STRING
  }, {});
  goal.associate = function(models) {
    // associations can be defined here
  };
  return goal;
};