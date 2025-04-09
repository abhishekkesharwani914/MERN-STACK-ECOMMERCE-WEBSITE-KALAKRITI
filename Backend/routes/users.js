const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { userAuth } = require('../middleware.js');

const userController = require("../controllers/users.js");

router.post("/register",wrapAsync(userController.register));
router.post("/login", wrapAsync(userController.login));
router.post("/logout", wrapAsync(userController.logout));
router.post("/send-verify-otp",userAuth, wrapAsync(userController.sendVerifyOtp));
router.post("/verify-account",userAuth, wrapAsync(userController.verifyEmail));
router.get("/is-auth",userAuth, wrapAsync(userController.isAuthenticated));
router.post("/send-reset-otp", wrapAsync(userController.sendResetOtp));
router.post("/reset-password", wrapAsync(userController.resetPassword));

module.exports = router;