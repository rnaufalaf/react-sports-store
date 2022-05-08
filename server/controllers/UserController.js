const { User, Item } = require("../models");

class UserController {
  static async getUsers(req, res) {
    try {
      let users = await User.findAll();

      if (users !== null) {
        res.json(users);
      } else {
        res.json({
          message: "Users are empty",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get Users",
      });
    }
  }

  static async getUser(req, res) {
    const id = Number(req.params.id);

    try {
      let user = await User.findOne({
        where: { id: id },
      });

      if (user !== null) {
        res.json(user);
      } else {
        res.json({
          message: "User not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't get User",
      });
    }
  }

  static async createUser(req, res) {
    const { username, phone, address, photo } = req.body;

    try {
      let userName = await User.findOne({
        where: {
          username: username,
        },
      });

      if (userName !== null) {
        res.json({
          message: `User ${username} already exists`,
        });
      } else {
        await User.create({ username, phone, address, photo });
        res.json({
          message: `User ${username} has been added`,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't add User",
      });
    }
  }

  static async deleteUser(req, res) {
    const id = Number(req.params.id);

    try {
      let userName = await User.findOne({
        attributes: ["username"],
        where: {
          id: id,
        },
      });

      if (userName !== null) {
        await User.destroy({
          where: {
            id: id,
          },
        });
        await Item.destroy({
          where: {
            UserId: id,
          },
        });
        res.json({
          message: `User ${userName.dataValues.username} has been deleted`,
        });
      } else {
        res.json({
          message: "User not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't delete User",
      });
    }
  }

  static async updateUser(req, res) {
    const { username, phone, address, photo } = req.body;
    const id = Number(req.params.id);

    try {
      let userName = await User.findOne({
        where: {
          id: id,
        },
      });

      if (userName !== null) {
        await User.update(
          { username, phone, address, photo },
          {
            where: {
              id: id,
            },
          }
        );
        res.json({
          message: `User ${userName.dataValues.username} has been updated to ${username}`,
        });
      } else {
        res.json({
          message: "User not found",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        message: "Couldn't update User",
      });
    }
  }
}

module.exports = UserController;
