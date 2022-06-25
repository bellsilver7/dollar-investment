"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, password } = await UserStorage.getUserInfo(client.userId);

    if (id) {
      if (id === client.userId && password === client.userPassword) {
        return { success: true };
      }
      return { success: false, message: "잘못된 비밀번호에요." };
    }
    return { success: false, message: "존재하지 않는 아이디에요." };
  }

  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}

module.exports = User;
