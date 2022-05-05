const ItemRoute = require("express").Router();

const ItemController = require("../controllers/ItemController");

ItemRoute.get("/", ItemController.getItems);
ItemRoute.get("/:id", ItemController.getItem);
ItemRoute.post("/create", ItemController.createItem);
ItemRoute.get("/delete/:id", ItemController.deleteItem);
ItemRoute.post("/update/:id", ItemController.updateItem);

module.exports = ItemRoute;
