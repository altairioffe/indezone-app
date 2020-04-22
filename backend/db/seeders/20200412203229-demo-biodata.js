'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('biodata', [{
      id:1,
      name: 'John',
      text: 'I am creative and adventurous. I love to try new things and try to help others as much as I can',
      user_id: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      name: 'Ann',
      text: 'I am calm and confident. I am physically active and healthy. I am a strong leader and I work hard to support my team, friends, and family',
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
