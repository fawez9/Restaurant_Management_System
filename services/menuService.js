const MenuItem = require("../models/MenuItem");

const createMenuItem = async (menuItemData) => {
  const { name, description, price, recipe } = menuItemData;

  // Validate input data
  if (!name || !description || !price || !recipe) {
    throw new Error("Invalid menu item data");
  }

  // Create a new menu item
  const newMenuItem = new MenuItem({
    name,
    description,
    price,
    recipe,
  });

  // Save the new menu item
  await newMenuItem.save();

  return newMenuItem;
};

const updateMenuItem = async (id, menuItemData) => {
  const { name, description, price, recipe } = menuItemData;

  // Validate input data
  if (!name || !description || !price || !recipe) {
    throw new Error("Invalid menu item data");
  }

  // Find the menu item by ID and update it
  const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, { name, description, price, recipe }, { new: true });

  if (!updatedMenuItem) {
    throw new Error("Menu item not found");
  }

  return updatedMenuItem;
};

const deleteMenuItem = async (id) => {
  // Find the menu item by ID and delete it
  const deletedMenuItem = await MenuItem.findByIdAndDelete(id);

  if (!deletedMenuItem) {
    throw new Error("Menu item not found");
  }

  return deletedMenuItem;
};

module.exports = {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
