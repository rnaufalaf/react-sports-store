# react-sports-store

A simple transaction recording app to assign sports item to User. Made with React and utilizing React Router DOM for routing the pages, and Tailwind CSS on the client-side, and Node.js with Express.js, PostgreSQL and Sequelize ORM on the server-side. This mini project also utilizes Axios for bridging the client-side and the server-side of the application.

This is the ERD representation of the project

![Brand Item](https://user-images.githubusercontent.com/61466456/166882171-f9117540-0d74-40f4-b690-4a994ce1aa7d.png)

URL for Routing

| No  | Route URL                      | Description            |
| --- | ------------------------------ | ---------------------- |
| 1   | localhost:3001/                | Display Homepage       |
| 2   | localhost:3001/brands          | Display Brands Page    |
| 3   | localhost:3001/users           | Display User Page      |
| 4   | localhost:3001/brands/add      | ADd Brand              |
| 5   | localhost:3001/brands/edit/:id | Edit Brand by Brand ID |
| 6   | localhost:3001/items/add       | Add Item               |
| 7   | localhost:3001/items/edit/:id  | Edit Item by Item ID   |
| 8   | localhost:3001/users/add       | Add User               |
| 9   | localhost:3001/users/edit/:id  | Edit User by User ID   |

API Documentation

| No  | HTTP Method | Endpoint URL                     | Description              |
| --- | ----------- | -------------------------------- | ------------------------ |
| 1   | GET         | localhost:3000/                  | Get Items                |
| 2   | GET         | localhost:3000/items/:id         | Get Item by Item ID      |
| 3   | POST        | localhost:3000/items/create      | Add Item                 |
| 4   | POST        | localhost:3000/items/update/:id  | Edit Item by Item ID     |
| 5   | GET         | localhost:3000/items/delete/:id  | Delete Item by Item ID   |
| 6   | GET         | localhost:3000/brands            | Get Brands               |
| 7   | GET         | localhost:3000/brands/:id        | Get Brand by Brand ID    |
| 8   | POST        | localhost:3000/brands/create     | Add Brand                |
| 9   | POST        | localhost:3000/brands/update/:id | Edit Brand by Brand ID   |
| 10  | GET         | localhost:3000/brands/delete/:id | Delete Brand by Brand ID |
| 11  | GET         | localhost:3000/users             | Get Users                |
| 12  | GET         | localhost:3000/users/:id         | Get User by User ID      |
| 13  | POST        | localhost:3000/users/create      | Add User                 |
| 14  | POST        | localhost:3000/users/update/:id  | Edit User by User ID     |
| 15  | GET         | localhost:3000/users/delete/:id  | Delete User by User ID   |
