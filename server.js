const experess = require("express");
const app = experess();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const orderRoutes = require("./routes/orders");
const menuRoutes = require("./routes/menu");
const inventoryRoutes = require("./routes/inventory");
const reservationRoutes = require("./routes/reservations");
const table = require("./routes/table");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
});

app.use(bodyParser.json());

app.use("/orders", orderRoutes);
app.use("/menu", menuRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/reservations", reservationRoutes);
app.use("/tables", table);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
