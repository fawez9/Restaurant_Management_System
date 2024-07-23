const Inventory = require("../models/Inventory");

// Create a new inventory item
const createInventoryItem = async (itemData) => {
  const { itemName, quantity, unit, reorderLevel } = itemData;

  // Validate input data
  if (!itemName || !quantity || !unit || !reorderLevel) {
    throw new Error("Invalid inventory item data");
  }

  // Create a new inventory item
  const newItem = await Inventory.create({ itemName, quantity, unit, reorderLevel });
  return newItem;
};

// Update an inventory item
const updateInventoryItem = async (id, itemData) => {
  const { itemName, quantity, unit, reorderLevel } = itemData;

  // Validate input data
  if (!itemName || !quantity || !unit || !reorderLevel) {
    throw new Error("Invalid inventory item data");
  }

  // Find the inventory item by ID and update it
  const updatedItem = await Inventory.findByIdAndUpdate(id, { itemName, quantity, unit, reorderLevel }, { new: true });

  if (!updatedItem) {
    throw new Error("Inventory item not found");
  }

  return updatedItem;
};

// Delete an inventory item
const deleteInventoryItem = async (id) => {
  // Find the inventory item by ID and delete it
  const deletedItem = await Inventory.findByIdAndDelete(id);

  if (!deletedItem) {
    throw new Error("Inventory item not found");
  }

  return deletedItem;
};

// Check and handle low-stock items
const handleLowStockItems = async () => {
  // Find all inventory items
  const allItems = await Inventory.find();

  // Filter items where quantity is less than reorderLevel
  const lowStockItems = allItems.filter((item) => item.quantity < item.reorderLevel);

  // Handle low-stock items (e.g., send notifications, generate reports)
  if (lowStockItems.length > 0) {
    // Implement your low-stock handling logic here
    console.log("Low-stock items:", lowStockItems);
  } else {
    console.log("No low-stock items found.");
  }

  return lowStockItems;
};

module.exports = {
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  handleLowStockItems,
};
