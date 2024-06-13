const router = require("express").Router();
const menuController = require("../controllers/menuController");

router.get("/", menuController.getAllMenuItems);
router.get("/:id", menuController.getMenuItemById);
router.post("/", menuController.createMenuItem);
router.put("/:id", menuController.updateMenuItem);
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
