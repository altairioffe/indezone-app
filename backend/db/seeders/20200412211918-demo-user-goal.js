'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('user_goals', [
      {
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
    {
      id:5,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      answer:"Eat vegetables",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      answer:"Be healthy",
      user_id:7,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,
      answer:"Eat vegetables",
      user_id:7,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      answer:"Eat vegetables",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:11,
      answer:"Be healthy",
      user_id:7,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:12,
      answer:"Eat vegetables",
      user_id:7,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:13,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:14,
      answer:"Eat vegetables",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:15,
      answer:"Be healthy",
      user_id:7,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:16,
      answer:"Eat vegetables",
      user_id:7,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:17,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:18,
      answer:"Eat vegetables",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:19,
      answer:"Be healthy",
      user_id:7,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:20,
      answer:"Eat vegetables",
      user_id:7,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:21,
      answer:"Be healthy",
      user_id:6,
      goal_id:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
