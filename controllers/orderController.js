const Order = require("../models/Order");
const orderService = require("../services/orderService");

// Create a new order
const createOrder = async (req, res, next) => {
  try {
    const orderData = req.body;
    const newOrder = await orderService.processOrder(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

// Get all orders
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

// Get a single order by ID
const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate("orderItems.item");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

// Update an order
const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

// Delete an order
const deleteOrder = async (req, res, next) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
