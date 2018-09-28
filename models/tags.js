'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    tagName: DataTypes.STRING,
    ArticleId: DataTypes.INTEGER
  }, {});
  Tags.associate = function (models) {
    // associations can be defined here
    Tags.belongsTo(models.Articles);
  };
  return Tags;
};