'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('users', [{
      id:6,
      handle: '@john',
      email: 'john@gmail.com',
      password:'john',
      points: 100,
      journalNo: 1001,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      handle: '@ann',
      email: 'ann@gmail.com',
      password:'ann',
      points: 200,
      journalNo: 1002,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()

    },
    {
      id:8,
      handle: '@george',
      email: 'george@gmail.com',
      password:'john',
      points: 100,
      journalNo: 1003,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()

    },
    {
      id:9,
      handle: '@kim',
      email: 'kim@gmail.com',
      password:'kim',
      points: 250,
      journalNo: 1004,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()

    }
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
