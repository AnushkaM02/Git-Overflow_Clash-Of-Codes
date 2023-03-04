const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
});

module.exports = questionSchema;
