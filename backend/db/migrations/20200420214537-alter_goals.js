'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'goals',
        'question',
        {
          type: Sequelize.TEXT
          
        }
      ),
 queryInterface.addColumn(
        'goals',
        'suggestion',
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
