'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('user_goals', [{
      id:1,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      answer:"Eat vegetables",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      answer:"Be healthy",
      user_id:7,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      answer:"Eat vegetables",
      user_id:7,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
