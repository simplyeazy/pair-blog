'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tags', [{
      tagName: "Lorem",
      ArticleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tagName: "Ipsum",
      ArticleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tagName: "Dolor",
      ArticleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tagName: "Sit Amet",
      ArticleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
