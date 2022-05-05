# react-sports-store
A simple transaction recording app to assign sports item to User. Made with React and utilizing React Router DOM for routing the pages, and Tailwind CSS on the client-side, and Node.js with Express.js, PostgreSQL and Sequelize ORM on the server-side. This mini project also utilizes Axios for bridging the client-side and the server-side of the application.

This is the ERD representation of the project

![Brand Item](https://user-images.githubusercontent.com/61466456/166882171-f9117540-0d74-40f4-b690-4a994ce1aa7d.png)

API Documentation

| No | API Endpoint                   | Description                         |
|----|--------------------------------|-------------------------------------|
| 1  | localhost:3001/                | Menampilkan Homepage                |
| 2  | localhost:3001/items/create    | Menambahkan Item                    |
| 3  | localhost:3001/items/edit/:id  | Mengedit Item berdasarkan Item ID   |
| 4  | localhost:3001/brands/create   | Menambahkan Brand                   |
| 5  | localhost:3001/brands/edit/:id | Mengedit Brand berdasarkan Brand ID |
| 6  | localhost:3001/users/create    | Menambahkan User                    |
| 7  | localhost:3001/users/edit/:id  | Mengedit User berdasarkan User ID   |
