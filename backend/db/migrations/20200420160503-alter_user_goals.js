'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
    queryInterface.removeColumn(
      'user_goals',
      'answer'
    ),
   
    queryInterface.addColumn(
      'user_goals',
      'answer',
      {
        type: Sequelize.TEXT
        
      }
    )
    
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
