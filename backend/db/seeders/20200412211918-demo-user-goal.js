'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('user_goals', [{
      id:1,
      
      goal_id:1,
      user_id:6,
      answer:"Be healthy",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      
      goal_id:2,
      user_id:6,
      answer:"Eat vegetables",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
     
      goal_id:1,
      user_id:7,
      answer:"Be healthy",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      goal_id:2,
      user_id:7,
      answer:"Eat vegetables",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
