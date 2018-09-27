'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    tagsId: DataTypes.INTEGER
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};