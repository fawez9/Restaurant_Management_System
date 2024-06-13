const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getAllInventoryItems);
router.get("/:id", inventoryController.getInventoryItemById);
router.post("/", inventoryController.createInventoryItem);
router.put("/:id", inventoryController.updateInventoryItem);
router.delete("/:id", inventoryController.deleteInventoryItem);

module.exports = router;
