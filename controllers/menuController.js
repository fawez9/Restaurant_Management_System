const MenuItem = require("../models/MenuItem");
const menuService = require("../services/menuService");

// Create a new menu item
const createMenuItem = async (req, res, next) => {
  try {
    const menuItemData = req.body;
    const newMenuItem = await menuService.createMenuItem(menuItemData);
    res.status(201).json(newMenuItem);
  } catch (error) {
    next(error);
  }
};

// Get all menu items
const getAllMenuItems = async (req, res, next) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    next(error);
  }
};

// Get a single menu item by ID
const getMenuItemById = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Update a menu item
const updateMenuItem = async (req, res, next) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(updatedMenuItem);
  } catch (error) {
    next(error);
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res, next) => {
  try {
    const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
