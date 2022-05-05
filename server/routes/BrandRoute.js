const BrandRoute = require("express").Router();

const BrandController = require("../controllers/BrandController");

BrandRoute.get("/", BrandController.getBrands);
BrandRoute.get("/:id", BrandController.getBrand);
BrandRoute.post("/create", BrandController.createBrand);
BrandRoute.get("/delete/:id", BrandController.deleteBrand);
BrandRoute.post("/update/:id", BrandController.updateBrand);

module.exports = BrandRoute;
