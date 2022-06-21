"use strict";

const express = require("express");
const router = express.Router();

const homeCtrl = require("./home.ctrl");
const investingCtrl = require("./investing.ctrl");
const loginCtrl = require("./login.ctrl");

router.get("/", homeCtrl.output.home);

router.get("/investing", investingCtrl.output.buy);
router.post("/investing/buy", investingCtrl.process.buy);

router.get("/login", loginCtrl.output.login);
router.post("/login", loginCtrl.process.login);

module.exports = router;
