const SpotModel = require("../models/Spot");
const UserModel = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spot = await SpotModel.find({ techs: tech });

    return res.json(spot);
  },
  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    const user = await UserModel.findById(user_id);
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .send({ error: "User does not exists. Try again." });
    }

    const spot = await SpotModel.create({
      user: user_id,
      thumbnail: filename,
      company: company,
      techs: techs.split(",").map(tech => tech.trim()),
      price: price
    });

    return res.json(spot);
  }
};
