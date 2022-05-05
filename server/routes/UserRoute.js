const UserRoute = require("express").Router();

UserRoute.get("/", (req, res) => {
  res.json({
    message: "User Route",
  });
});

module.exports = UserRoute;
