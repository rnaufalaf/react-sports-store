const ItemRoute = require("express").Router();

ItemRoute.get("/", (req, res) => {
  res.json({
    message: "Item Route",
  });
});

module.exports = ItemRoute;
