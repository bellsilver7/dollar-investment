"use strict";

const InvestmentStorage = require("./InvestmentStorage");

class Investment {
  constructor(body) {
    this.body = body;
    this.TYPE_BUY = 1;
    this.TYPE_SELL = 2;
  }

  async buy() {
    const client = this.body;
    client.type = this.TYPE_BUY;
    try {
      const response = await InvestmentStorage.save(client);
      return response;
    } catch (error) {
      return { success: false, error };
    }
  }
}

module.exports = Investment;
