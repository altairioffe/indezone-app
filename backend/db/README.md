# DB setup

1. npm install --save-dev sequelize-cli
2. npx sequelize-cli init
3. configure config.js
4. npx sequelize-cli db:create
5. model creation

## Model Creation

users (id(pk),handle,email,password,points,journalNo)
npx sequelize-cli model:generate --name user --attributes handle:string,email:string,password:string,points:integer,journalNo:integer

biodatas(id(pk),name,text,user_id(fk))
npx sequelize-cli model:generate --name biodata --attributes name:string,text:string,user_id:integer

user_goals(id(pk), user_id(fk), goal_id(fk),answer,created_at, updated_at)
npx sequelize-cli model:generate --name user_goal --attributes user_id:integer,goal_id:integer,answer:string,created_at:date,updated_at:date

goals (id(pk), question, suggestion)
npx sequelize-cli model:generate --name goal --attributes question:string,suggestion:string

6. npx sequelize-cli db:migrate

7. Create associations
   npx sequelize-cli migration:generate --name biodata-user-add-associations

8.  npx sequelize-cli db:migrate
9.  npx sequelize-cli migration:generate --name biodata-user-add-associations
10. npx sequelize-cli db:migrate
11. npx sequelize-cli migration:generate --name user_goals-add-associations

## Creating seeds

12. npx sequelize-cli seed:generate --name demo-user
modify seed file 

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('users', [{
      handle: '@john',
      email: 'john@gmail.com',
      password:'john',
      points: 100,
      journalNo: 1001
  
    }
    
   
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

13. npx sequelize-cli db:seed:all

14. npx sequelize-cli seed:generate --name demo-biodata

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('biodata', [{
      id:1,
      name: 'John',
      text: 'Software Engineer',
      user_id: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }]

15. npx sequelize-cli db:seed:all --debug

16. npx sequelize-cli seed:generate --name demo-goal

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
    }
     ]);

17. npx sequelize-cli seed:generate --name demo-user-goal

## References
https://sequelize.org/master/manual/migrations.html#undoing-migrations
