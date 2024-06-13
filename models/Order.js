const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  orderItems: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalCost: {
    type: Number,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "served"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
