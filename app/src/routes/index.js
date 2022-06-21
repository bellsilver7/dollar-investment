"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./dollar.ctrl");
const loginCtrl = require("./login.ctrl");

router.get("/", ctrl.output.page);
router.get("/buy", ctrl.output.buy);
router.post("/buy", ctrl.process.buy);

router.get("/login", loginCtrl.output.login);
router.post("/login", loginCtrl.process.login);

module.exports = router;
