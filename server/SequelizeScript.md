## Sequelize Script

npx sequelize-cli model:generate --name User --attributes username:string,phone:string,address:string,photo:string

npx sequelize-cli model:generate --name Brand --attributes name:string,logo:string

npx sequelize-cli model:generate --name Item --attributes name:string,type:string,img:string,description:string,BrandId:integer,UserId:integer
