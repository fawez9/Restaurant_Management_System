const router = require("express").Router();
const tableController = require("../controllers/tableController");

router.get("/", tableController.getAllTables);
router.get("/:id", tableController.getTableById);
router.post("/", tableController.createTable);
router.put("/:id", tableController.updateTable);
router.delete("/:id", tableController.deleteTable);

module.exports = router;
