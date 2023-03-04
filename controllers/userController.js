const mongoose = require("mongoose");
const allModels = require("../utils/allModels");
const userSchema = require("../models/userModel");

const User = new mongoose.model("User", userSchema);

exports.signupController = async (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    match: req.body.match,
  });

  newUser
    .save()
    .then(() =>
      res.json({
        Status:
          "Successfully entered a new user with username " + req.body.username,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

exports.signinController = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((foundUser) => {
      if (foundUser) {
        if (foundUser.password == password) {
          res.json({
            Status: "Successfully logged in",
          });
        } else {
          res.json({
            Status: "Password is incorrect",
          });
        }
      } else {
        res.json({
          Status: "No user exists with this username",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
