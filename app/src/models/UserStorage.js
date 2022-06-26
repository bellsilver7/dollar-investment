"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "select * from users where id = ?;";
      db.query(query, [id], (error, data) => {
        if (error) return reject(`${error}`);
        return resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "insert into users(id, name, password) values(?, ?, ?); ";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (error) => {
          if (error) return reject(`${error}`);
          return resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
