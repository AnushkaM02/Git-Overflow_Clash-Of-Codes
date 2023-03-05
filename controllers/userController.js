const mongoose = require("mongoose");
const allModels = require("../utils/allModels");
const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");
const questionSchema = require("../models/questionsModel");

const User = new mongoose.model("User", userSchema);

exports.signupController = async (req, res, next) => {
  const hashedpassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    email: req.body.email,
    password: hashedpassword,
    name: "",
    gender: "",
    gender_interest: "",
    age_group: "",
    age_preference: "",
    relation_type: "",
    match: [],
  });

  newUser
    .save()
    .then(() =>
      res.json({
        success: "Successfully entered a new user " + req.body.name,
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
    res.status(500).send("Internal Server Error Occured");
  }
};

exports.getInfo = async (req, res, next) => {
  // console.log(req.session.email);
  await User.updateOne({ email: req.session.email }, { name: req.body.name });
  await User.updateOne(
    { email: req.session.email },
    { gender: req.body.gender }
  );
  await User.updateOne(
    { email: req.session.email },
    { gender_interest: req.body.gender_interest }
  );
  await User.updateOne(
    { email: req.session.email },
    { age_group: req.body.age_group }
  );
  await User.updateOne(
    { email: req.session.email },
    { age_preference: req.body.age_preference }
  );
  await User.updateOne(
    { email: req.session.email },
    { relation_type: req.body.relation_type }
  );
  await User.updateOne(
    { email: req.session.email },
    { questions: req.body.questions }
  );
  // console.log(req.body.gender, req.session.email);
  // await User.updateOne(
  //   { email: req.session.name },
  //   { gender: req.body.gender }
  // );
  // await User.updateOne(
  //   { email: req.session.name },
  //   { gender_interest: req.body.gender_interest }
  // );
  // await User.updateOne(
  //   { email: req.session.name },
  //   { age_group: req.body.age_group }
  // );
  // await User.updateOne(
  //   { email: req.session.name },
  //   { age_preference: req.body.age_preference }
  // );
  // await User.updateOne(
  //   { email: req.session.name },
  //   { relation_type: req.body.relation_type }
  // );
  // await User.updateOne(
  //   { email: req.session.name },
  //   { questions: req.body.questions }
  // );
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
      let weight = 0;
      let maxWeight = 0;
      let email = "";
      for (let i = 0; i < list_of_matches.length; i++) {
        weight = 0;
        for (let j = 0; j < list_of_matches[i].questions[0].q1.length; j++) {
          if (
            user.questions[0].q1[j] === list_of_matches[i].questions[0].q1[j] &&
            user.questions[0].q1[j] === 1
          ) {
            weight += 10;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q2.length; j++) {
          if (
            user.questions[0].q2[j] === list_of_matches[i].questions[0].q2[j] &&
            user.questions[0].q2[j] === 1
          ) {
            weight += 7;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q3.length; j++) {
          if (
            user.questions[0].q3[j] === list_of_matches[i].questions[0].q3[j] &&
            user.questions[0].q3[j] === 1
          ) {
            weight += 6;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q4.length; j++) {
          if (
            user.questions[0].q4[j] === list_of_matches[i].questions[0].q4[j] &&
            user.questions[0].q4[j] === 1
          ) {
            weight += 5;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q5.length; j++) {
          if (
            user.questions[0].q5[j] === list_of_matches[i].questions[0].q5[j] &&
            user.questions[0].q5[j] === 1
          ) {
            weight += 5;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q6.length; j++) {
          if (
            user.questions[0].q6[j] === list_of_matches[i].questions[0].q6[j] &&
            user.questions[0].q6[j] === 1
          ) {
            weight += 4;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q7.length; j++) {
          if (
            user.questions[0].q7[j] === list_of_matches[i].questions[0].q7[j] &&
            user.questions[0].q7[j] === 1
          ) {
            weight += 4;
          }
        }
        for (let j = 0; j < list_of_matches[i].questions[0].q8.length; j++) {
          if (
            user.questions[0].q8[j] === list_of_matches[i].questions[0].q8[j] &&
            user.questions[0].q8[j] === 1
          ) {
            weight += 3;
          }
        }
        if (
          weight > maxWeight &&
          !match_arr.includes(list_of_matches[i].email)
        ) {
          maxWeight = weight;
          email = list_of_matches[i].email;
        }
      }

      if (!match_arr.includes(email)) {
        match_arr.push(email);
        const matchedUser = await User.updateOne(
          { email: req.body.email },
          { match: match_arr }
        );
      }

      const matchedUser = await User.findOne({ email: email });
      if (matchedUser) {
        res.json({ "Matched User": matchedUser.name });
      } else {
        res.json({ Status: "No available users" });
      }
    }
  } else {
    res.json({ Status: "Error" });
  }
};
