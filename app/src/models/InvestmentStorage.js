"use strict";

const db = require("../config/db");
class InvestmentStorage {
  static async save(investmentInfo) {
    console.log("storage", investmentInfo);
    return new Promise((resolve, reject) => {
      const query =
        "insert into investments(type, price, amount, created_at) values(1, ?, ?, now())";
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
