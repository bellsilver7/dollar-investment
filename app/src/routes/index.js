"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./dollar.ctrl");

router.get("/", ctrl.page);
router.post("/buy", ctrl.buy);

module.exports = router;
