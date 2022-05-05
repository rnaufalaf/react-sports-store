const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const ItemRoute = require("./ItemRoute");
route.use("/items", ItemRoute);

const UserRoute = require("./UserRoute");
route.use("/users", UserRoute);

const BrandRoute = require("./BrandRoute");
route.use("/brands", BrandRoute);

module.exports = route;
