const express = require("express");
const router = express();

const userController = require("../controllers/matchController");

router.post("/match", userController.signupController);

module.exports = router;
