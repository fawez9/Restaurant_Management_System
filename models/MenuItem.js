const mongoose = require("mongoose");
const { Schema } = mongoose;
const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
