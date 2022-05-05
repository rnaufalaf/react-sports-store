const { Item } = require("../models");

class ItemController {
  static async getItems(req, res) {
    try {
      let items = await Item.findAll();

      if (items !== null) {
        res.json(items);
      } else {
        res.json({
          message: "Items are empty",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get Items",
      });
    }
  }

  static async getItem(req, res) {
    const id = Number(req.params.id);

    try {
      let item = await Item.findOne({
        where: { id: id },
      });

      if (item !== null) {
        res.json(item);
      } else {
        res.json({
          message: "Item not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get Item",
      });
    }
  }

  static async createItem(req, res) {
    const { name, type, img, description, BrandId, UserId } = req.body;

    try {
      await Item.create({ name, type, img, description, BrandId, UserId });
      res.json({
        message: `Item ${name} has been added`,
      });
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't add Item",
      });
    }
  }

  static async deleteItem(req, res) {
    const id = Number(req.params.id);

    try {
      let ItemName = await Item.findOne({
        attributes: ["name"],
        where: {
          id: id,
        },
      });

      if (ItemName !== null) {
        await Item.destroy({
          where: {
            id: id,
          },
        });
        res.json({
          message: `Item ${ItemName.dataValues.name} has been deleted`,
        });
      } else {
        res.json({
          message: "Item not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't delete Item",
      });
    }
  }

  static async updateItem(req, res) {
    const { name, type, img, description, BrandId, UserId } = req.body;
    const id = Number(req.params.id);

    try {
      let ItemName = await Item.findOne({
        where: {
          id: id,
        },
      });

      if (ItemName !== null) {
        await Item.update(
          { name, type, img, description, BrandId, UserId },
          {
            where: {
              id: id,
            },
          }
        );
        res.json({
          message: `Item ${ItemName.dataValues.name} has been updated to ${name}`,
        });
      } else {
        res.json({
          message: "Item not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't update Item",
      });
    }
  }
}

module.exports = ItemController;
