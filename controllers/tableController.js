const Table = require("../models/Table");

const getAllTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error) {
    next(error);
  }
};

const getTableById = async (req, res, next) => {
  try {
    const table = await Table.findById(req.params.id);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
    res.json(table);
  } catch (error) {
    next(error);
  }
};

const createTable = async (req, res, next) => {
  try {
    const tableData = req.body;
    const newTable = await Table.create(tableData);
    res.status(201).json(newTable);
  } catch (error) {
    next(error);
  }
};

const updateTable = async (req, res, next) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTable) {
      return res.status(404).json({ message: "Table not found" });
    }
    res.json(updatedTable);
  } catch (error) {
    next(error);
  }
};

const deleteTable = async (req, res, next) => {
  try {
    const deletedTable = await Table.findByIdAndDelete(req.params.id);
    if (!deletedTable) {
      return res.status(404).json({ message: "Table not found" });
    }
    res.json({ message: "Table deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
};
