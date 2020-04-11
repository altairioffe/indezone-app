'use strict';
module.exports = (sequelize, DataTypes) => {
  const biodata = sequelize.define('biodata', {
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  biodata.associate = function(models) {
    // associations can be defined here
    biodata.belongsTo(models.user);
  };
  return biodata;
};