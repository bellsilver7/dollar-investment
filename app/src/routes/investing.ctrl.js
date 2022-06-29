"use strict";

const logger = require("../config/logger");
const ExchangeRate = require("../models/ExchangeRate");

const output = {
  page: (req, res) => {
    logger.info(`GET /investing 200 "투자 화면으로 이동"`);
    res.render("investing");
  },
  exchangeRate: async (req, res) => {
    const info = await ExchangeRate.get();
    console.log(info.data);

    // {
    //   result: 1,
    //   cur_unit: 'USD',
    //   ttb: '1,272.05',
    //   tts: '1,297.74',
    //   deal_bas_r: '1,284.9',
    //   bkpr: '1,284',
    //   yy_efee_r: '0',
    //   ten_dd_efee_r: '0',
    //   kftc_bkpr: '1,284',
    //   kftc_deal_bas_r: '1,284.9',
    //   cur_nm: '미국 달러'
    // }

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
