const UserRoute = require("express").Router();

const UserController = require("../controllers/UserController");

UserRoute.get("/", UserController.getUsers);
UserRoute.get("/:id", UserController.getUser);
UserRoute.post("/create", UserController.createUser);
UserRoute.get("/delete/:id", UserController.deleteUser);
UserRoute.post("/update/:id", UserController.updateUser);

module.exports = UserRoute;
