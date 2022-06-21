"use strict";

class UserStorage {
  // # 은 private 설정
  static #users = {
    id: ["bellsilver7", "David", "Peter"],
    password: ["1234", "5678", "3456"],
    name: ["아무개", "홍길동", "개똥이"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
