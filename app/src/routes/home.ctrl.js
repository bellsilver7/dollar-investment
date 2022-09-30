"use strict";
const logger = require("../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "메인 화면으로 이동"`);

    console.log("req.session.user", req.session);
    res.locals.user = req.session.user;
    res.render("home");
  },
};

module.exports = {
  output,
};
