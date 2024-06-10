const InventoryItem = require("../models/Inventory");

exports.getAllItems = async (req, res) => {
  const items = await InventoryItem.find();
  res.status(200).json(items);
};

exports.addItem = async (req, res) => {
  const item = await InventoryItem.create(req.body);
  res.status(201).json({ "Item added": item });
};

exports.updateItem = async (req, res) => {
  const item = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json({ "Item updated": item });
};

exports.deleteItem = async (req, res) => {
  const item = await InventoryItem.findByIdAndDelete(req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json("Item has been deleted");
};
