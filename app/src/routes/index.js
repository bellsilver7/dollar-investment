"use strict";

const express = require("express");
const router = express.Router();

const homeCtrl = require("./home.ctrl");
const investmentCtrl = require("./investment.ctrl");
const userCtrl = require("./user.ctrl");

router.get("/", homeCtrl.output.home);

router.get("/investment", investmentCtrl.output.index);
router.get("/investment/buy", investmentCtrl.output.buy);
router.post("/investment/buy", investmentCtrl.process.buy);

router.get("/login", userCtrl.output.login);
router.post("/login", userCtrl.process.login);

router.get("/register", userCtrl.output.register);
router.post("/register", userCtrl.process.register);

module.exports = router;
