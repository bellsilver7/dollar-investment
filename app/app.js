"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const route = require("./src/routes");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", route);

module.exports = app;
