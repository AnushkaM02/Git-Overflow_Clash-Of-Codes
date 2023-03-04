const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");
const validator = require("validator");
const matchSchema = require("./matchModel");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: { type: String, require: true },
  match: [matchSchema],
});

module.exports = userSchema;
