const UserModel = require("../models/User");

module.exports = {
  async index(req, res) {
    const user = await UserModel.find();
    return res.json(user);
  },

  async store(req, res) {
    const user = await UserModel.findOne(req.body);

    if (!user) {
      await UserModel.create(req.body);
      return res.status(200).send(user);
    }

    return res.status(201).send(user);
  },

  async update(req, res) {
    const { userId } = req.params;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not exists" });
    } else {
      const user = req.body;
      await UserModel.updateOne(user);
      return res.status(204).send();
    }
  },

  async deleteUser(req, res) {
    const { userId } = req.params;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not exists" });
    }

    await UserModel.deleteOne(user);
    user.save();

    return res.status(204).send(user);
  }
};
