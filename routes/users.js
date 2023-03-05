const express = require("express");
const router = express();

const userController = require("../controllers/userController");

router.post("/user/sign-up", userController.signupController);

router.post("/user/sign-in", userController.signinController);

router.get("/user/match", userController.getGenderedUsers);

router.post("/user/onboarding", userController.getInfo);

module.exports = router;
