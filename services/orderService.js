const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");
const Inventory = require("../models/Inventory");

const processOrder = async (orderData) => {
  try {
    // Check inventory availability
    const validatedOrderItems = await validateInventory(orderData.orderItems);

    // Calculate total cost
    const totalCost = calculateTotalCost(validatedOrderItems);

    // Create a new order
    const newOrder = await Order.create({
      orderItems: validatedOrderItems,
      totalCost,
      status: "confirmed",
      tableNumber: orderData.tableNumber,
    });

    // Update inventory levels
    await updateInventory(validatedOrderItems);

    return newOrder;
  } catch (error) {
    // Handle any errors or throw them for the calling function to handle
    console.error(`Error processing order: ${error.message}`);
    throw error;
  }
};

const validateInventory = async (orderItems) => {
  const validatedItems = [];

  for (const orderItem of orderItems) {
    try {
      // Find the MenuItem by its ObjectId and populate the item
      const menuItem = await MenuItem.findById(orderItem.item);

      if (!menuItem) {
        throw new Error(`MenuItem with id ${orderItem.item} not found`);
      }

      // Check if there's enough ingredients in the inventory to make the order
      for (const recipeItem of menuItem.recipe) {
        const inventoryItem = await Inventory.findById(recipeItem.ingredient);

        if (!inventoryItem) {
          throw new Error(`Inventory item with id ${recipeItem.ingredient} not found`);
        } else if (inventoryItem.quantity < recipeItem.quantity * orderItem.quantity) {
          throw new Error(`Insufficient quantity for ingredient ${inventoryItem.itemName}`);
        }
      }

      // Push the order item with populated menuItem
      validatedItems.push({
        ...orderItem,
        item: menuItem,
      });
    } catch (error) {
      // Log detailed error message
      console.error(`Error validating item with id ${orderItem.item || "undefined"}: ${error.message}`);
      throw error; // Rethrow the error to be caught by the calling function
    }
  }

  return validatedItems;
};

const calculateTotalCost = (orderItems) => {
  let totalCost = 0;

  for (const orderItem of orderItems) {
    console.log(`Processing order item: ${JSON.stringify(orderItem)}`);
    // Check if order item is valid
    if (orderItem.item && typeof orderItem.item === "object" && orderItem.item.price && orderItem.quantity) {
      totalCost += orderItem.item.price * orderItem.quantity;
      console.log(`Item Total for ${orderItem.item.name}: ${totalCost}`);
    } else {
      console.warn(`Invalid order item: ${JSON.stringify(orderItem)}`);
    }
  }
  return totalCost;
};

const updateInventory = async (orderItems) => {
  for (const orderItem of orderItems) {
    const menuItem = orderItem.item;
    for (const recipeItem of menuItem.recipe) {
      const inventoryItem = await Inventory.findById(recipeItem.ingredient);
      if (!inventoryItem) {
        throw new Error(`Inventory item with id ${recipeItem.ingredient} not found`);
      }
      inventoryItem.quantity -= recipeItem.quantity * orderItem.quantity;
      await inventoryItem.save();
    }
  }
};

module.exports = {
  processOrder,
};
