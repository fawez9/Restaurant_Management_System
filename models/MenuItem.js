const mongoose = require("mongoose");
const { Schema } = mongoose;
const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  recipe: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
