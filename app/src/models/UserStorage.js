"use strict";

const db = require("../config/db");

class UserStorage {
  static async getUserInfo(id) {
    const data = await db("users").where("id", id);
    return data[0];
  }

  static async save(userInfo) {
    const data = await db("users").insert(userInfo);
    return data[0];
  }
}

module.exports = UserStorage;
