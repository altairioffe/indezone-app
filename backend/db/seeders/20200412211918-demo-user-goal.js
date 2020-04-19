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
    {
      id:5,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      answer:"Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together.",
      user_id:6,
      goal_id:2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
