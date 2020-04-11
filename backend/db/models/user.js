'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    handle: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    points: DataTypes.INTEGER,
    journalNo: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};