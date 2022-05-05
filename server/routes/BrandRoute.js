const BrandRoute = require("express").Router();

BrandRoute.get("/", (req, res) => {
  res.json({
    message: "Brand Route",
  });
});

module.exports = BrandRoute;
