'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('goals', [{
      id:1,
      question: 'What is your goal today?',
      suggestion: 'Do some productive task',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      question: 'What do you want to do to be healthy?',
      suggestion: 'Do some exercise today',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      question: 'What do you want to do to improve your work?',
      suggestion: 'Learn something new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      question: 'What did you want to do be happy?',
      suggestion: 'Help yourself or help someone',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
