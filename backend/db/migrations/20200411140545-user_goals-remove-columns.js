'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'user_goals',
        'created_at'
      ),
      queryInterface.removeColumn(
        'user_goals',
        'updated_at'
      ),
      queryInterface.addColumn(
        'user_goals',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'user_goals',
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: false
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
