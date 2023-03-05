const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");
const validator = require("validator");
const questionSchema = require("../models/questionsModel");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: { type: String, required: true },
  gender: String,
  gender_interest: String,
  age_group: String,
  age_preference: String,
  summary: String,
  relation_type: String,
  questions: [questionSchema],
  match: [String],
});

module.exports = userSchema;
