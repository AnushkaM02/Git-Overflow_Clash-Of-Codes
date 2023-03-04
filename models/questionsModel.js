const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  q1: [Number],
  q2: [Number],
  q3: [Number],
  q4: [Number],
  q5: [Number],
  q6: [Number],
  q7: [Number],
  q8: [Number],
});

module.exports = questionSchema;
