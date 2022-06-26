"use strict";
const logger = require("../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "메인 화면으로 이동"`);
    res.render("home");
  },
};

module.exports = {
  output,
};
