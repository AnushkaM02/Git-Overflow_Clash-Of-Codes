const mongoose = require("mongoose");
const allModels = require("../utils/allModels");
const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");

const User = new mongoose.model("User", userSchema);

exports.signupController = async (req, res, next) => {
  const hashedpassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
    gender: req.body.gender,
    gender_interest: req.body.gender_interest,
    match: req.body.match,
  });

  newUser
    .save()
    .then(() =>
      res.json({
        Status: "Successfully entered a new user " + req.body.name,
      })
    )
    .catch((err) => {
      console.log(err);
    });
  req.session.signedin = true;
  req.session.email = req.body.email;
};

exports.signinController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        req.session.signedin = true;
        req.session.email = req.body.email;
        res.json({ Status: "Auth Successful" });
      } else {
        res.json({ Status: "Wrong username or password" });
      }
    } else {
      res.json({ Status: "Wrong username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};

exports.getGenderedUsers = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const list_of_matches = await User.find({ gender: user.gender_interest });
    if (list_of_matches) {
      console.log(list_of_matches);
    }
  } else {
    res.json({ Status: "Wrong username or password" });
  }
};
