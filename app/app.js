"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");

// 라우팅
const route = require("./src/routes");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny"));
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );
// app.use(morgan("combined"));
// app.use(morgan("dev", { stream: accessLogStream }));
app.use(morgan("common", { stream: accessLogStream }));
// app.use(morgan(":method :date[web]", { stream: accessLogStream }));
// mongoose-moran 을 사용하면 MongoDB 와 연결 가능

app.use("/", route);

module.exports = app;
