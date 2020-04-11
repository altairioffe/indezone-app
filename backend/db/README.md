# DB setup
1. npm install --save-dev sequelize-cli
2. npx sequelize-cli init
3. modify config.json 
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
9. npx sequelize-cli migration:generate --name biodata-user-add-associations
10. npx sequelize-cli db:migrate
11. npx sequelize-cli migration:generate --name user_goals-add-associations


## References
https://sequelize.org/master/manual/migrations.html#undoing-migrations
