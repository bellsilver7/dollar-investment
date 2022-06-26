"use strict";

const logger = require("../config/logger");
const axios = require("axios");

const output = {
  page: (req, res) => {
    logger.info(`GET /investing/buy 200 "투자 화면으로 이동"`);
    res.render("investing");
  },
  exchangeRate: async (req, res) => {
    try {
      await axios({
        method: "GET",
        url: "http://fx.kebhana.com/FER1101M.web",
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }

    logger.info(`GET /investing/exchange-rate 200 "환율 정보 조회"`);
    return res;
  },
};

const process = {
  buy: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
