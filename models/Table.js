const mongoose = require("mongoose");
const { Schema } = mongoose;

const TableSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Table", TableSchema);
