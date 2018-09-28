'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Authors.associate = function (models) {
    // associations can be defined here
    Authors.hasMany(models.Articles);
  };
  return Authors;
};