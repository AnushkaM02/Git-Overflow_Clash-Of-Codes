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
    age_group: req.body.age_group,
    age_preference: req.body.age_preference,
    relation_type: req.body.relation_type,
    match: [],
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
  const user = await User.findOne({ email: req.session.email });
  if (user) {
    const list_of_matches = await User.find({
      gender: user.gender_interest,
      age_group: user.age_preference,
      relation_type: user.relation_type,
    });
    match_arr = user.match;
    if (list_of_matches) {
      let random = Math.floor(Math.random() * list_of_matches.length);
      let i = 0;
      while (i < 25 && match_arr.includes(list_of_matches[random].email)) {
        random = Math.floor(Math.random() * list_of_matches.length);
        i++;
      }
      if (i >= 25) {
        res.json({ Status: "No available users" });
      } else {
        if (!match_arr.includes(list_of_matches[random].email)) {
          match_arr.push(list_of_matches[random].email);
        }
        const matchedUser = await User.updateOne(
          { email: req.body.email },
          { match: match_arr }
        );
        res.json({ Match: list_of_matches[random].name });
      }
    }
  } else {
    res.json({ Status: "Error" });
  }
};
