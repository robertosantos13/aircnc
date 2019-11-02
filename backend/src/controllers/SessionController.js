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
      return res
        .status(200)
        .send()
        .json(user);
    }

    return res.status(201).send(user);
  }
};
