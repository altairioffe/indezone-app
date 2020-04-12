'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('biodata', [{
      id:1,
      name: 'John',
      text: 'Software Engineer',
      user_id: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      name: 'Ann',
      text: 'Software Engineer',
      user_id: 7,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      name: 'George',
      text: 'Software Engineer',
      user_id: 8,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      name: 'Kim',
      text: 'Software Engineer',
      user_id: 9,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('biodata', null, {});
  }
};
