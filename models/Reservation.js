const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  partySize: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
