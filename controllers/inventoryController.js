const Inventory = require("../models/Inventory");
const inventoryService = require("../services/inventoryService");

// Create a new inventory item
const createInventoryItem = async (req, res, next) => {
  try {
    const itemData = req.body;
    const newItem = await inventoryService.createInventoryItem(itemData);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// Get all inventory items
const getAllInventoryItems = async (req, res, next) => {
  try {
    const items = await Inventory.find();
    res.json(items, inventoryService.handleLowStockItems());
  } catch (error) {
    next(error);
  }
};

// Get a single inventory item by ID
const getInventoryItemById = async (req, res, next) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

// Update an inventory item
const updateInventoryItem = async (req, res, next) => {
  try {
    const updatedItem = await inventoryService.updateInventoryItem(req.params.id, req.body);
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
};

// Delete an inventory item
const deleteInventoryItem = async (req, res, next) => {
  try {
    const deletedItem = await inventoryService.deleteInventoryItem(req.params.id);
    res.json({ message: "Inventory item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInventoryItem,
  getAllInventoryItems,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
};
