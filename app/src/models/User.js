"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.userId);

    if (id) {
      if (id === body.userId && password === body.userPassword) {
        return { success: true };
      }
      return { success: false, message: "잘못된 비밀번호에요." };
    }
    return { success: false, message: "존재하지 않는 아이디에요." };
  }
}

module.exports = User;
