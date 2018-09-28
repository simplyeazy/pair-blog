'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    AuthorId: DataTypes.INTEGER,
    TagsId: DataTypes.INTEGER
  }, {});
  Articles.associate = function (models) {
    // associations can be defined here
    Articles.belongsTo(models.Authors);
    Articles.hasMany(models.Tags);
  };
  return Articles;
};