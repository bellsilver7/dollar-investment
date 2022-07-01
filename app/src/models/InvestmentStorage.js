"use strict";

const db = require("../config/db");
class InvestmentStorage {
  static async save(investmentInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "insert into investments(type, price, amount, created_at) values(?, ?, ?, now())";
      db.query(
        query,
        [investmentInfo.type, investmentInfo.price, investmentInfo.amount],
        (error) => {
          if (error) return reject(`${error}`);
          return resolve({ success: true });
        }
      );
    });
  }
}

module.exports = InvestmentStorage;
