"use strict";

const UserStorage = require("../models/UserStorage");

const output = {
  login: (req, res) => {
    res.render("login");
  },
};

const process = {
  login: (req, res) => {
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;

    const users = UserStorage.getUsers("id", "password");

    console.log(users);

    const response = {
      success: false,
      message: "로그인 실패",
    };

    if (users.id.includes(userId)) {
      const idx = users.id.indexOf(userId);
      if (users.password[idx] === userPassword) {
        response.success = true;
        response.message = "로그인 성공";
      }
    }

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
