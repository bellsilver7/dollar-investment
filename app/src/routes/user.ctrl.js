"use strict";

const User = require("../models/User");
const logger = require("../config/logger");

const output = {
  login: (req, res) => {
    logger.info(`GET /login 200 "로그인 화면으로 이동"`);
    res.render("login");
  },
  register: (req, res) => {
    logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
    res.render("register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.error)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, message: ${response.error}"`
      );
    else
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, message: ${response.message}"`
      );
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.error)
      logger.error(
        `POST /register 200 Response: "success: ${response.success}, message: ${response.error}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, message: ${response.message}"`
      );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
