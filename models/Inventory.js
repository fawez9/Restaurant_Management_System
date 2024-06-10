const mongoose = require("mongoose");
const { Schema } = mongoose;
const InventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Inventory", InventorySchema);
