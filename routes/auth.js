const express = require("express");
const logInLimiter = require("../middlewares/logInLimiter")
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(logInLimiter, login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);

module.exports = router;
