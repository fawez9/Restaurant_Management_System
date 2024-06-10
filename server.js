const experess = require("express");
const app = experess();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const orderRoutes = require("./routes/orders");
const menuRoutes = require("./routes/menu");
const inventoryRoutes = require("./routes/inventory");
const reservationRoutes = require("./routes/reservations");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/orders", orderRoutes);
app.use("/menu", menuRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/reservations", reservationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
