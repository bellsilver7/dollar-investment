"use strict";

const express = require("express");
const router = express.Router();

const homeCtrl = require("./home.ctrl");
const investingCtrl = require("./investing.ctrl");
const userCtrl = require("./user.ctrl");

router.get("/", homeCtrl.output.home);

router.get("/investing", investingCtrl.output.buy);
router.post("/investing/buy", investingCtrl.process.buy);

router.get("/login", userCtrl.output.login);
router.post("/login", userCtrl.process.login);

router.get("/register", userCtrl.output.register);
router.post("/register", userCtrl.process.register);

module.exports = router;
