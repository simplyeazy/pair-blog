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
    return queryInterface.bulkInsert('Authors', [{
      firstName: "Lundy",
      lastName: "Orlando",
      username: "simplyeazy",
      email: "simplyeazy@gmail.com",
      password: "lundy",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: "Muhammad",
      lastName: "Abduh",
      username: "abduh",
      email: "abduh@gmail.com",
      password: "abduh123",
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
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
