const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReservationSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  partySize: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "seated"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
