"use strict";

const axios = require("axios");

class ExchangeRate {
  constructor(body) {
    this.body = body;
  }

  async get() {
    const client = this.body;
    const API_URL =
      "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON";
    const EXCHANGE_INFO_CODE = "AP01";
    const DOLLAR_CODE = "USD";

    console.log(
      `${API_URL}` +
        `?authkey=${process.env.API_KEY}` +
        `&searchdate=${client.searchDate}` +
        `&data=${EXCHANGE_INFO_CODE}`
    );
    try {
      const info = await axios({
        method: "GET",
        url:
          `${API_URL}` +
          `?authkey=${process.env.API_KEY}` +
          `&searchdate=${client.searchDate}` +
          `&data=${EXCHANGE_INFO_CODE}`,
      }).then((res) => {
        return res.data.filter((item) => item.cur_unit === DOLLAR_CODE);
      });
      return { success: true, data: info[0] };
    } catch (error) {
      return { success: false, error };
    }
  }
}

module.exports = ExchangeRate;
