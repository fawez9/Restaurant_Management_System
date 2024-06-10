const { Schema } = require("mongoose");

const ReservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
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
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
