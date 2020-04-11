# Model Creation

users (id(pk),handle,email,password,points,journalNo)
npx sequelize-cli model:generate --name user --attributes handle:string,email:string,password:string,points:integer,journalNo:integer

biodatas(id(pk),name,text,user_id(fk))
npx sequelize-cli model:generate --name biodata --attributes name:string,text:string,user_id:integer

user_goals(id(pk), user_id(fk), goal_id(fk),answer,created_at, updated_at)
npx sequelize-cli model:generate --name user_goal --attributes user_id:integer,goal_id:integer,answer:string,created_at:date,updated_at:date

goals (id(pk), question, suggestion)
npx sequelize-cli model:generate --name goal --attributes question:string,suggestion:string

# association

up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn(
      'biodata',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn(
      'user',
      'user_id'
    );
  }



  return queryInterface.addColumn(
      'biodata',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );