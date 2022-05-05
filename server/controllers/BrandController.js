const { Brand } = require("../models");

class BrandController {
  static async getBrands(req, res) {
    try {
      let brands = await Brand.findAll();

      if (brands !== null) {
        res.json(brands);
      } else {
        res.json({
          message: "Brands are empty",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get Brands",
      });
    }
  }

  static async getBrand(req, res) {
    const id = Number(req.params.id);

    try {
      let brand = await Brand.findOne({
        where: { id: id },
      });

      if (brand !== null) {
        res.json(brand);
      } else {
        res.json({
          message: "Brand not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get Brand",
      });
    }
  }

  static async createBrand(req, res) {
    const { name, logo } = req.body;

    try {
      let brandName = await Brand.findOne({
        where: {
          name: name,
        },
      });

      if (brandName !== null) {
        res.json({
          message: `Brand ${name} already exists`,
        });
      } else {
        await Brand.create({ name, logo });
        res.json({
          message: `Brand ${name} has been added`,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't add Brand",
      });
    }
  }

  static async deleteBrand(req, res) {
    const id = Number(req.params.id);

    try {
      let brandName = await Brand.findOne({
        attributes: ["name"],
        where: {
          id: id,
        },
      });

      if (brandName !== null) {
        await Brand.destroy({
          where: {
            id: id,
          },
        });
        res.json({
          message: `Brand ${brandName.dataValues.name} has been deleted`,
        });
      } else {
        res.json({
          message: "Brand not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't delete Brand",
      });
    }
  }

  static async updateBrand(req, res) {
    const { name, logo } = req.body;
    const id = Number(req.params.id);

    try {
      let brandName = await Brand.findOne({
        where: {
          id: id,
        },
      });

      if (brandName !== null) {
        await Brand.update(
          { name, logo },
          {
            where: {
              id: id,
            },
          }
        );
        res.json({
          message: `Brand ${brandName.dataValues.name} has been updated to ${name}`,
        });
      } else {
        res.json({
          message: "Brand not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't update Brand",
      });
    }
  }
}

module.exports = BrandController;
