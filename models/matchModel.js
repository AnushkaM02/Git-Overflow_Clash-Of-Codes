const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");
const validator = require("validator");

const matchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = matchSchema;
