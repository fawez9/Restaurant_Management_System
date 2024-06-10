const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  items: [
    {
      menuItem: { type: Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["new", "in progress", "completed", "cancelled"],
    default: "new",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
