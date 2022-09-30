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
    const url = {
      method: "POST",
      path: "/login",
      status: response.error ? 400 : 200,
    };

    console.log("response.data =", response.data);
    if (response.data) {
      req.session.user = {
        id: response.data.id,
        name: response.data.name,
      };
    }

    return res.status(url.status).json(response);
  },
  logout: async (req, res) => {
    req.session.user = null;
    return res.redirect("/");
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    const url = {
      method: "POST",
      path: "/register",
      status: response.error ? 400 : 201,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};

const log = (response, url) => {
  if (response.error) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: "${response.success} ${response.error}"`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: "${response.success} ${
        response.message || ""
      }"`
    );
  }
};

module.exports = {
  output,
  process,
};
