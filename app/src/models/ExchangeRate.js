"use strict";

const axios = require("axios");
const moment = require("moment");

class ExchangeRate {
  static async get() {
    const API_URL =
      "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON";
    const EXCHANGE_INFO_CODE = "AP01";
    const DOLLAR_CODE = "USD";
    try {
      const searchDate = moment().format("YYYYMMDD");
      const info = await axios({
        method: "GET",
        url:
          `${API_URL}` +
          `?authkey=${process.env.API_KEY}` +
          `&searchdate=${searchDate}` +
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
