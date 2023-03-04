const conn = require("../utils/dbConnection");
const mongoose = require("mongoose");
const validator = require("validator");
const questionSchema = require("../models/questionsModel");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  gender_interest: { type: String, required: true },
  age_group: { type: String, required: true },
  age_preference: { type: String, required: true },
  summary: String,
  relation_type: { type: String, required: true },
  questions: [questionSchema],
  match: [String],
});

module.exports = userSchema;
