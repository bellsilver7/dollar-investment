"use strict";

const users = {
  id: ["bellsilver7", "David", "Peter"],
  password: ["1234", "5678", "3456"],
};

const output = {
  login: (req, res) => {
    res.render("login");
  },
};

const process = {
  login: (req, res) => {
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;

    if (users.id.includes(userId)) {
      const idx = users.id.indexOf(userId);
      if (users.password[idx] === userPassword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      message: "로그인 실패",
    });
  },
};

module.exports = {
  output,
  process,
};
