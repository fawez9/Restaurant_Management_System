const experess = require("express");
const app = experess();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
