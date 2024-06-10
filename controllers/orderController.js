const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("items.menuItem"); // .populate is used to join two tables
  res.status(200).json(orders);
};

exports.addOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json({ "Order added": order });
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json({ "Order updated": order });
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json("order has been deleted");
};
