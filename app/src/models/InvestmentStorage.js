"use strict";

const knex = require("../config/db");

class InvestmentStorage {
  static async get() {
    return await knex
      .select("price", "amount", "created_at")
      .from("investments")
      .orderBy("created_at", "desc");
  }

  static async save(data) {
    const timestamp = Date.now();
    const values = {
      type: data.type,
      price: data.price,
      amount: data.amount,
      created_at: timestamp,
    };
    return await knex.insert(values).into("investments");
  }
}

module.exports = InvestmentStorage;
