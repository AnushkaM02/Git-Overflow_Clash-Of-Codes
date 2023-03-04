require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const conn = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database is connected successfully"))
  .catch((error) => console.log(error));

module.exports = conn;
