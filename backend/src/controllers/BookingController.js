const BookingModel = require("../models/Booking");
module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await BookingModel.create({
      user: user_id,
      spot: spot_id,
      date
    });

    console.log(booking);

    await booking
      .populate("user")
      .populate("spot")
      .execPopulate();

    return res.json(booking);
  }
};
