const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SpotModel"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel"
  }
});

module.exports = mongoose.model("BookingModel", BookingSchema);
