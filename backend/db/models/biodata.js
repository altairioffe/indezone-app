'use strict';
module.exports = (sequelize, DataTypes) => {
  const Biodata = sequelize.define('biodata', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  Biodata.associate = function(models) {
    // associations can be defined here
  };
  return Biodata;
};